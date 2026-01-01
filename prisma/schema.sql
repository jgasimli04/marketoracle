-- ================================================
-- Market Oracle Database Schema
-- PostgreSQL + TimescaleDB
-- Linear Regression for Price Forecasting
-- Author: Javad Gasimli
-- ================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;

-- ================================================
-- CORE DATA TABLES
-- ================================================

-- Product/Niche snapshots (time-series)
DROP TABLE IF EXISTS niche_snapshots CASCADE;
CREATE TABLE niche_snapshots (
    id BIGSERIAL,
    keyword VARCHAR(255) NOT NULL,
    country CHAR(2) NOT NULL,
    captured_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- Price metrics
    price_min DECIMAL(10,2),
    price_max DECIMAL(10,2),
    price_avg DECIMAL(10,2),
    price_median DECIMAL(10,2),
    price_dispersion DECIMAL(5,4),
    price_currency CHAR(3) DEFAULT 'USD',

    -- Competition metrics
    total_sellers INT,
    unique_sellers INT,
    marketplace_dominance DECIMAL(5,2),
    top3_concentration DECIMAL(5,2),
    review_barrier INT,

    -- Demand signals
    keyword_variations INT,
    buyer_questions INT,
    organic_results INT,

    -- Computed scores (0-100)
    overall_score INT,
    opportunity_score INT,
    competition_score INT,
    demand_score INT,
    price_health_score INT,

    -- Verdict
    verdict VARCHAR(10),
    verdict_reason TEXT,

    PRIMARY KEY (id, captured_at)
);

-- Convert to hypertable
SELECT create_hypertable('niche_snapshots', 'captured_at',
    chunk_time_interval => INTERVAL '1 day',
    if_not_exists => TRUE
);

-- News sentiment aggregates
DROP TABLE IF EXISTS news_sentiment CASCADE;
CREATE TABLE news_sentiment (
    id BIGSERIAL,
    keyword VARCHAR(255) NOT NULL,
    captured_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    positive_count INT DEFAULT 0,
    neutral_count INT DEFAULT 0,
    negative_count INT DEFAULT 0,
    total_articles INT DEFAULT 0,
    sentiment_score DECIMAL(5,4),
    unique_sources INT,
    confidence VARCHAR(10),
    top_positive_headlines JSONB,
    top_negative_headlines JSONB,

    PRIMARY KEY (id, captured_at)
);

SELECT create_hypertable('news_sentiment', 'captured_at',
    chunk_time_interval => INTERVAL '1 day',
    if_not_exists => TRUE
);

-- Tariff tracking
DROP TABLE IF EXISTS tariff_rates CASCADE;
CREATE TABLE tariff_rates (
    id SERIAL PRIMARY KEY,
    hs_code VARCHAR(10),
    product_category VARCHAR(100),
    description TEXT,
    origin_country CHAR(2) NOT NULL,
    destination_country CHAR(2) NOT NULL DEFAULT 'US',
    rate_percentage DECIMAL(5,2) NOT NULL,
    additional_rate DECIMAL(5,2) DEFAULT 0,
    total_rate DECIMAL(5,2) GENERATED ALWAYS AS (rate_percentage + additional_rate) STORED,
    effective_date DATE NOT NULL,
    expiry_date DATE,
    source_url TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(hs_code, origin_country, destination_country, effective_date)
);

-- Market events
DROP TABLE IF EXISTS market_events CASCADE;
CREATE TABLE market_events (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    affected_keywords TEXT[],
    affected_categories TEXT[],
    affected_countries CHAR(2)[],
    severity VARCHAR(10),
    estimated_price_impact DECIMAL(5,2),
    source_url TEXT,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);

-- ================================================
-- INDEXES
-- ================================================

CREATE INDEX idx_niche_keyword_country ON niche_snapshots(keyword, country);
CREATE INDEX idx_niche_captured_at ON niche_snapshots(captured_at DESC);
CREATE INDEX idx_niche_keyword_time ON niche_snapshots(keyword, country, captured_at DESC);
CREATE INDEX idx_news_keyword ON news_sentiment(keyword);
CREATE INDEX idx_news_keyword_time ON news_sentiment(keyword, captured_at DESC);
CREATE INDEX idx_tariff_origin ON tariff_rates(origin_country, destination_country);
CREATE INDEX idx_events_type ON market_events(event_type);
CREATE INDEX idx_events_keywords ON market_events USING GIN(affected_keywords);

-- ================================================
-- MATERIALIZED VIEWS
-- ================================================

-- Daily price trends (for regression analysis)
DROP MATERIALIZED VIEW IF EXISTS mv_price_trends;
CREATE MATERIALIZED VIEW mv_price_trends AS
SELECT
    keyword,
    country,
    date_trunc('day', captured_at)::DATE as date,
    AVG(price_avg) as avg_price,
    MIN(price_min) as min_price,
    MAX(price_max) as max_price,
    AVG(price_dispersion) as avg_dispersion,
    AVG(competition_score) as avg_competition,
    AVG(demand_score) as avg_demand,
    COUNT(*) as sample_count
FROM niche_snapshots
WHERE price_avg IS NOT NULL
GROUP BY keyword, country, date_trunc('day', captured_at)::DATE;

CREATE UNIQUE INDEX idx_mv_price_trends ON mv_price_trends(keyword, country, date);

-- ================================================
-- LINEAR REGRESSION FUNCTIONS
-- ================================================

/**
 * Simple Linear Regression Price Predictor
 *
 * Uses PostgreSQL built-in regression functions:
 * - regr_slope(Y, X): calculates β₁ in y = β₀ + β₁x
 * - regr_intercept(Y, X): calculates β₀
 * - regr_r2(Y, X): coefficient of determination (0-1)
 *
 * The X variable is time (epoch seconds), Y is price
 */
CREATE OR REPLACE FUNCTION predict_price_trend(
    p_keyword VARCHAR,
    p_country CHAR(2),
    p_days_back INT DEFAULT 30,
    p_days_forward INT DEFAULT 7
)
RETURNS TABLE (
    prediction_date DATE,
    predicted_price DECIMAL(10,2),
    slope DECIMAL(12,8),
    intercept DECIMAL(12,2),
    r_squared DECIMAL(6,4),
    confidence VARCHAR(15),
    sample_size INT
) AS $$
DECLARE
    v_slope DECIMAL;
    v_intercept DECIMAL;
    v_r_squared DECIMAL;
    v_last_epoch BIGINT;
    v_sample_count INT;
BEGIN
    -- Calculate regression coefficients
    SELECT
        regr_slope(avg_price, EXTRACT(EPOCH FROM date)),
        regr_intercept(avg_price, EXTRACT(EPOCH FROM date)),
        regr_r2(avg_price, EXTRACT(EPOCH FROM date)),
        MAX(EXTRACT(EPOCH FROM date)),
        COUNT(*)
    INTO v_slope, v_intercept, v_r_squared, v_last_epoch, v_sample_count
    FROM mv_price_trends
    WHERE keyword = p_keyword
      AND country = p_country
      AND date >= CURRENT_DATE - (p_days_back || ' days')::INTERVAL;

    -- Handle insufficient data
    IF v_sample_count < 3 OR v_slope IS NULL THEN
        RETURN QUERY SELECT
            CURRENT_DATE,
            NULL::DECIMAL(10,2),
            NULL::DECIMAL(12,8),
            NULL::DECIMAL(12,2),
            NULL::DECIMAL(6,4),
            'INSUFFICIENT'::VARCHAR(15),
            COALESCE(v_sample_count, 0);
        RETURN;
    END IF;

    -- Generate predictions
    RETURN QUERY
    SELECT
        (CURRENT_DATE + (gs || ' days')::INTERVAL)::DATE,
        ROUND(
            GREATEST(0, v_slope * (v_last_epoch + gs * 86400) + v_intercept)::NUMERIC,
            2
        ),
        v_slope,
        ROUND(v_intercept::NUMERIC, 2),
        ROUND(COALESCE(v_r_squared, 0)::NUMERIC, 4),
        CASE
            WHEN COALESCE(v_r_squared, 0) >= 0.7 THEN 'HIGH'
            WHEN COALESCE(v_r_squared, 0) >= 0.4 THEN 'MEDIUM'
            WHEN COALESCE(v_r_squared, 0) >= 0.2 THEN 'LOW'
            ELSE 'VERY_LOW'
        END,
        v_sample_count
    FROM generate_series(1, p_days_forward) as gs;
END;
$$ LANGUAGE plpgsql;

/**
 * Multi-variable correlation analysis
 * Shows which factors correlate with price changes
 */
CREATE OR REPLACE FUNCTION analyze_variable_impact(
    p_keyword VARCHAR,
    p_country CHAR(2),
    p_days INT DEFAULT 90
)
RETURNS TABLE (
    factor VARCHAR(30),
    correlation DECIMAL(6,4),
    impact_direction VARCHAR(10),
    is_significant BOOLEAN,
    interpretation TEXT
) AS $$
BEGIN
    RETURN QUERY
    WITH combined AS (
        SELECT
            ns.price_avg,
            ns.competition_score,
            ns.demand_score,
            ns.marketplace_dominance,
            ns.review_barrier,
            ns.price_dispersion,
            COALESCE(sent.sentiment_score, 0) as sentiment_score
        FROM niche_snapshots ns
        LEFT JOIN news_sentiment sent
            ON ns.keyword = sent.keyword
            AND DATE_TRUNC('day', ns.captured_at) = DATE_TRUNC('day', sent.captured_at)
        WHERE ns.keyword = p_keyword
          AND ns.country = p_country
          AND ns.captured_at >= NOW() - (p_days || ' days')::INTERVAL
          AND ns.price_avg IS NOT NULL
    )
    SELECT
        f.name::VARCHAR(30),
        ROUND(f.corr::NUMERIC, 4),
        CASE WHEN f.corr > 0 THEN 'POSITIVE' ELSE 'NEGATIVE' END::VARCHAR(10),
        ABS(f.corr) > 0.3,
        CASE
            WHEN f.name = 'competition' AND f.corr < -0.3
                THEN 'Higher competition drives prices down'
            WHEN f.name = 'competition' AND f.corr > 0.3
                THEN 'Higher competition correlates with higher prices (premium market)'
            WHEN f.name = 'demand' AND f.corr > 0.3
                THEN 'Strong demand supports higher prices'
            WHEN f.name = 'sentiment' AND f.corr > 0.3
                THEN 'Positive news sentiment supports pricing power'
            WHEN f.name = 'sentiment' AND f.corr < -0.3
                THEN 'Negative sentiment correlates with price drops'
            WHEN f.name = 'marketplace_share' AND f.corr < -0.3
                THEN 'Higher marketplace dominance pressures prices down'
            WHEN f.name = 'review_barrier' AND f.corr > 0.3
                THEN 'Higher review barriers correlate with premium pricing'
            WHEN f.name = 'price_dispersion' AND f.corr > 0.3
                THEN 'Wide price range indicates segmented market'
            WHEN ABS(f.corr) <= 0.3
                THEN 'Weak correlation - not a primary price driver'
            ELSE 'Moderate correlation detected'
        END::TEXT
    FROM (
        SELECT 'competition' as name, CORR(price_avg, competition_score) as corr FROM combined
        UNION ALL
        SELECT 'demand', CORR(price_avg, demand_score) FROM combined
        UNION ALL
        SELECT 'sentiment', CORR(price_avg, sentiment_score) FROM combined
        UNION ALL
        SELECT 'marketplace_share', CORR(price_avg, marketplace_dominance) FROM combined
        UNION ALL
        SELECT 'review_barrier', CORR(price_avg, review_barrier) FROM combined
        UNION ALL
        SELECT 'price_dispersion', CORR(price_avg, price_dispersion) FROM combined
    ) f
    WHERE f.corr IS NOT NULL
    ORDER BY ABS(f.corr) DESC;
END;
$$ LANGUAGE plpgsql;

/**
 * Rolling regression for trend detection
 * Calculates slope over sliding windows to detect trend changes
 */
CREATE OR REPLACE FUNCTION detect_trend_changes(
    p_keyword VARCHAR,
    p_country CHAR(2),
    p_window_days INT DEFAULT 7
)
RETURNS TABLE (
    date DATE,
    price DECIMAL(10,2),
    rolling_slope DECIMAL(12,8),
    trend VARCHAR(15),
    trend_strength DECIMAL(5,2)
) AS $$
BEGIN
    RETURN QUERY
    WITH daily_data AS (
        SELECT
            date,
            avg_price,
            ROW_NUMBER() OVER (ORDER BY date) as rn
        FROM mv_price_trends
        WHERE keyword = p_keyword
          AND country = p_country
        ORDER BY date
    ),
    rolling_calc AS (
        SELECT
            d1.date,
            d1.avg_price,
            regr_slope(d2.avg_price, d2.rn) as rslope
        FROM daily_data d1
        JOIN daily_data d2
            ON d2.date BETWEEN d1.date - (p_window_days || ' days')::INTERVAL AND d1.date
        GROUP BY d1.date, d1.avg_price
        HAVING COUNT(*) >= 3
    )
    SELECT
        rc.date,
        ROUND(rc.avg_price::NUMERIC, 2),
        rc.rslope,
        CASE
            WHEN rc.rslope > 0.5 THEN 'STRONG_UP'
            WHEN rc.rslope > 0.1 THEN 'TRENDING_UP'
            WHEN rc.rslope < -0.5 THEN 'STRONG_DOWN'
            WHEN rc.rslope < -0.1 THEN 'TRENDING_DOWN'
            ELSE 'STABLE'
        END::VARCHAR(15),
        ROUND(ABS(rc.rslope)::NUMERIC * 10, 2)
    FROM rolling_calc rc
    ORDER BY rc.date DESC;
END;
$$ LANGUAGE plpgsql;

/**
 * Comprehensive market score calculator
 * Combines all signals into actionable recommendation
 */
CREATE OR REPLACE FUNCTION calculate_market_score(
    p_keyword VARCHAR,
    p_country CHAR(2)
)
RETURNS TABLE (
    overall_score INT,
    recommendation VARCHAR(10),
    confidence VARCHAR(10),
    risk_level VARCHAR(10),

    price_trend VARCHAR(15),
    price_prediction DECIMAL(10,2),

    sentiment_current DECIMAL(5,4),
    sentiment_trend VARCHAR(15),

    competition_level VARCHAR(15),
    demand_level VARCHAR(15),

    active_alerts INT,
    factors JSONB
) AS $$
DECLARE
    v_niche RECORD;
    v_sentiment RECORD;
    v_prediction RECORD;
    v_alerts INT;
    v_risk_score INT := 0;
    v_factors JSONB := '[]'::JSONB;
BEGIN
    -- Get latest niche snapshot
    SELECT * INTO v_niche
    FROM niche_snapshots
    WHERE keyword = p_keyword AND country = p_country
    ORDER BY captured_at DESC
    LIMIT 1;

    -- Get latest sentiment
    SELECT * INTO v_sentiment
    FROM news_sentiment
    WHERE keyword = p_keyword
    ORDER BY captured_at DESC
    LIMIT 1;

    -- Get price prediction
    SELECT * INTO v_prediction
    FROM predict_price_trend(p_keyword, p_country, 14, 1)
    LIMIT 1;

    -- Count active alerts
    SELECT COUNT(*) INTO v_alerts
    FROM market_events
    WHERE is_active = TRUE
      AND (affected_keywords && ARRAY[p_keyword] OR affected_countries && ARRAY[p_country]);

    -- Calculate risk factors
    IF v_niche.competition_score >= 70 THEN
        v_risk_score := v_risk_score + 30;
        v_factors := v_factors || '{"factor": "competition", "risk": "high"}'::JSONB;
    END IF;

    IF COALESCE(v_sentiment.sentiment_score, 0) < -0.3 THEN
        v_risk_score := v_risk_score + 20;
        v_factors := v_factors || '{"factor": "sentiment", "risk": "negative"}'::JSONB;
    END IF;

    IF v_alerts > 0 THEN
        v_risk_score := v_risk_score + v_alerts * 10;
        v_factors := v_factors || format('{"factor": "alerts", "count": %s}', v_alerts)::JSONB;
    END IF;

    RETURN QUERY SELECT
        COALESCE(v_niche.overall_score, 50),
        CASE
            WHEN COALESCE(v_niche.verdict, 'CAUTION') = 'GO' AND v_risk_score < 30 THEN 'ENTER'
            WHEN COALESCE(v_niche.verdict, 'CAUTION') = 'KILL' OR v_risk_score >= 50 THEN 'AVOID'
            ELSE 'WAIT'
        END::VARCHAR(10),
        COALESCE(v_prediction.confidence, 'LOW')::VARCHAR(10),
        CASE
            WHEN v_risk_score >= 50 THEN 'HIGH'
            WHEN v_risk_score >= 25 THEN 'MEDIUM'
            ELSE 'LOW'
        END::VARCHAR(10),
        CASE
            WHEN v_prediction.slope > 0.001 THEN 'RISING'
            WHEN v_prediction.slope < -0.001 THEN 'FALLING'
            ELSE 'STABLE'
        END::VARCHAR(15),
        v_prediction.predicted_price,
        COALESCE(v_sentiment.sentiment_score, 0),
        CASE
            WHEN COALESCE(v_sentiment.sentiment_score, 0) > 0.3 THEN 'POSITIVE'
            WHEN COALESCE(v_sentiment.sentiment_score, 0) < -0.3 THEN 'NEGATIVE'
            ELSE 'NEUTRAL'
        END::VARCHAR(15),
        CASE
            WHEN COALESCE(v_niche.competition_score, 50) >= 70 THEN 'EXTREME'
            WHEN COALESCE(v_niche.competition_score, 50) >= 50 THEN 'HIGH'
            WHEN COALESCE(v_niche.competition_score, 50) >= 30 THEN 'MODERATE'
            ELSE 'LOW'
        END::VARCHAR(15),
        CASE
            WHEN COALESCE(v_niche.demand_score, 50) >= 60 THEN 'HIGH'
            WHEN COALESCE(v_niche.demand_score, 50) >= 30 THEN 'MODERATE'
            ELSE 'LOW'
        END::VARCHAR(15),
        v_alerts,
        v_factors;
END;
$$ LANGUAGE plpgsql;

-- ================================================
-- UTILITY FUNCTIONS
-- ================================================

-- Refresh materialized views (run via cron)
CREATE OR REPLACE FUNCTION refresh_analytics_views()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY mv_price_trends;
END;
$$ LANGUAGE plpgsql;

-- Get tariff rate for a product
CREATE OR REPLACE FUNCTION get_current_tariff(
    p_hs_code VARCHAR,
    p_origin CHAR(2),
    p_destination CHAR(2) DEFAULT 'US'
)
RETURNS DECIMAL AS $$
BEGIN
    RETURN (
        SELECT total_rate
        FROM tariff_rates
        WHERE (hs_code = p_hs_code OR p_hs_code LIKE hs_code || '%')
          AND origin_country = p_origin
          AND destination_country = p_destination
          AND effective_date <= CURRENT_DATE
          AND (expiry_date IS NULL OR expiry_date > CURRENT_DATE)
        ORDER BY LENGTH(hs_code) DESC, effective_date DESC
        LIMIT 1
    );
END;
$$ LANGUAGE plpgsql;

-- ================================================
-- SAMPLE DATA FOR TESTING
-- ================================================

-- Insert sample tariff data
INSERT INTO tariff_rates (hs_code, product_category, origin_country, rate_percentage, additional_rate, effective_date, notes)
VALUES
    ('8517', 'Smartphones & Telecom', 'CN', 0, 25, '2025-01-01', 'Section 301 tariff'),
    ('8471', 'Computers', 'CN', 0, 25, '2025-01-01', 'Section 301 tariff'),
    ('6110', 'Knitted Sweaters', 'CN', 12, 7.5, '2025-01-01', 'Textile tariff + China duty'),
    ('9503', 'Toys', 'CN', 0, 25, '2025-01-01', 'Section 301 tariff'),
    ('8518', 'Speakers & Headphones', 'CN', 0, 7.5, '2025-01-01', 'Reduced List 4A'),
    ('9506', 'Sports Equipment', 'CN', 0, 25, '2025-01-01', 'Section 301 tariff'),
    ('6402', 'Footwear', 'VN', 12.5, 0, '2025-01-01', 'Standard MFN rate'),
    ('6110', 'Knitted Sweaters', 'VN', 12, 0, '2025-01-01', 'Standard textile rate')
ON CONFLICT DO NOTHING;

-- Insert sample market event
INSERT INTO market_events (event_type, title, description, affected_countries, severity, source_url, published_at)
VALUES (
    'tariff_change',
    'De Minimis Exemption Eliminated for China',
    'As of May 2025, all goods from China regardless of value are subject to duties. The $800 exemption no longer applies.',
    ARRAY['CN', 'US'],
    'CRITICAL',
    'https://www.cbp.gov',
    '2025-05-01'
);

-- ================================================
-- COMMENTS FOR DOCUMENTATION
-- ================================================

COMMENT ON FUNCTION predict_price_trend IS 'Uses OLS linear regression on historical price data to forecast future prices. Returns R² as confidence metric.';
COMMENT ON FUNCTION analyze_variable_impact IS 'Calculates Pearson correlation between price and competition/demand/sentiment factors.';
COMMENT ON FUNCTION detect_trend_changes IS 'Rolling window regression to identify trend reversals and momentum changes.';
COMMENT ON FUNCTION calculate_market_score IS 'Aggregates all signals into a single actionable recommendation.';
