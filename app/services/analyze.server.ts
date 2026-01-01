/**
 * Comprehensive Market Analysis Orchestrator
 * Combines Serper, NewsData, and PostgreSQL regression analysis
 * Author: Javad Gasimli
 */

import { searchGoogle, searchShopping } from "./serper.server";
import { analyzeNiche, type NicheAnalysis } from "./nicheAnalysis.server";
import {
  aggregateSentiment,
  monitorRegulatoryNews,
  type SentimentAggregation,
  type RegulatoryAlert
} from "./newsdata.server";
import { db } from "./db.server";

// ================================================
// TYPE DEFINITIONS
// ================================================

export interface ComprehensiveAnalysis {
  meta: {
    keyword: string;
    country: string;
    analyzedAt: string;
    processingTime: number;
    dataQuality: {
      serperDataPoints: number;
      newsArticles: number;
      historicalDays: number;
    };
  };

  nicheAnalysis: NicheAnalysis;

  sentimentAnalysis: {
    score: number;
    distribution: {
      positive: number;
      neutral: number;
      negative: number;
    };
    trend: 'IMPROVING' | 'STABLE' | 'DECLINING';
    confidence: 'HIGH' | 'MEDIUM' | 'LOW';
    topPositiveHeadlines: string[];
    topNegativeHeadlines: string[];
  };

  regulatoryAlerts: {
    hasActiveAlerts: boolean;
    alertCount: number;
    alerts: RegulatoryAlert[];
    tariffImpact: {
      currentRate: number | null;
      affectedCategories: string[];
    };
  };

  predictions: {
    priceTrend: 'RISING' | 'STABLE' | 'FALLING';
    predictedPrice7d: number | null;
    priceChangePercent: number | null;
    confidence: number;
    confidenceLabel: string;
    slope: number | null;
    factors: Array<{
      name: string;
      correlation: number;
      direction: string;
      isSignificant: boolean;
      interpretation: string;
    }>;
  };

  recommendations: {
    action: 'ENTER' | 'WAIT' | 'AVOID';
    reasoning: string[];
    riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
    riskScore: number;
    opportunities: string[];
    warnings: string[];
    nextSteps: string[];
  };
}

// ================================================
// MAIN ANALYSIS FUNCTION
// ================================================

export async function comprehensiveAnalysis(
  keyword: string,
  country: string
): Promise<ComprehensiveAnalysis> {
  const startTime = Date.now();

  // ========================================
  // PARALLEL DATA FETCHING
  // ========================================

  const [
    searchResults,
    shoppingResults,
    sentimentData,
    regulatoryNews,
    historicalData,
    priceRegression,
    factorImpact,
    tariffData,
  ] = await Promise.allSettled([
    // Serper data
    searchGoogle(keyword, country),
    searchShopping(keyword, country),

    // NewsData sentiment
    aggregateSentiment(keyword, {
      countries: [country],
      timeframeHours: 24
    }),

    // Regulatory monitoring
    monitorRegulatoryNews({
      targetCountries: [country, 'cn'],
      customKeywords: [keyword],
      timeframeHours: 48
    }),

    // Historical snapshots from DB
    fetchHistoricalData(keyword, country, 30),

    // PostgreSQL regression analysis
    fetchPriceRegression(keyword, country),

    // Factor correlation analysis
    fetchFactorImpact(keyword, country),

    // Tariff lookup
    fetchTariffData(keyword, country),
  ]);

  // ========================================
  // EXTRACT RESULTS (HANDLE FAILURES)
  // ========================================

  const search = searchResults.status === 'fulfilled' ? searchResults.value : null;
  const shopping = shoppingResults.status === 'fulfilled' ? shoppingResults.value : null;
  const sentiment = sentimentData.status === 'fulfilled' ? sentimentData.value : null;
  const regulatory = regulatoryNews.status === 'fulfilled' ? regulatoryNews.value : [];
  const historical = historicalData.status === 'fulfilled' ? historicalData.value : [];
  const regression = priceRegression.status === 'fulfilled' ? priceRegression.value : null;
  const factors = factorImpact.status === 'fulfilled' ? factorImpact.value : [];
  const tariff = tariffData.status === 'fulfilled' ? tariffData.value : null;

  // ========================================
  // CORE NICHE ANALYSIS
  // ========================================

  const nicheAnalysis = analyzeNiche({
    keyword,
    country,
    search: search || { organic: [], peopleAlsoAsk: [], relatedSearches: [] },
    shopping: shopping || { shopping: [] },
  });

  // ========================================
  // SENTIMENT ANALYSIS
  // ========================================

  const sentimentTrend = calculateSentimentTrend(historical);

  const sentimentAnalysis = {
    score: sentiment?.sentimentScore ?? 0,
    distribution: {
      positive: sentiment?.positiveCount ?? 0,
      neutral: sentiment?.neutralCount ?? 0,
      negative: sentiment?.negativeCount ?? 0,
    },
    trend: sentimentTrend,
    confidence: sentiment?.confidence ?? 'LOW',
    topPositiveHeadlines: sentiment?.topPositiveHeadlines ?? [],
    topNegativeHeadlines: sentiment?.topNegativeHeadlines ?? [],
  };

  // ========================================
  // REGULATORY ANALYSIS
  // ========================================

  const relevantAlerts = filterRelevantAlerts(regulatory, keyword);

  const regulatoryAlerts = {
    hasActiveAlerts: relevantAlerts.length > 0,
    alertCount: relevantAlerts.length,
    alerts: relevantAlerts.slice(0, 5),
    tariffImpact: {
      currentRate: tariff?.totalRate ?? null,
      affectedCategories: tariff?.categories ?? [],
    },
  };

  // ========================================
  // PREDICTIONS
  // ========================================

  const currentPrice = nicheAnalysis.pricing.avg;
  const predictedPrice = regression?.predictedPrice ?? currentPrice;
  const priceChangePercent = currentPrice > 0
    ? ((predictedPrice - currentPrice) / currentPrice) * 100
    : 0;

  const predictions = {
    priceTrend: determinePriceTrend(regression?.slope ?? 0),
    predictedPrice7d: regression?.predictedPrice ?? null,
    priceChangePercent: Math.round(priceChangePercent * 100) / 100,
    confidence: regression?.rSquared ?? 0,
    confidenceLabel: regression?.confidence ?? 'INSUFFICIENT',
    slope: regression?.slope ?? null,
    factors: factors.map(f => ({
      name: f.factor,
      correlation: f.correlation,
      direction: f.impactDirection,
      isSignificant: f.isSignificant,
      interpretation: f.interpretation,
    })),
  };

  // ========================================
  // GENERATE RECOMMENDATIONS
  // ========================================

  const recommendations = generateRecommendations({
    nicheAnalysis,
    sentimentAnalysis,
    predictions,
    regulatoryAlerts,
    historicalDataCount: historical.length,
  });

  // ========================================
  // STORE SNAPSHOT FOR FUTURE ANALYSIS
  // ========================================

  await storeSnapshot(keyword, country, nicheAnalysis, sentiment);

  // ========================================
  // BUILD FINAL RESPONSE
  // ========================================

  const processingTime = Date.now() - startTime;

  return {
    meta: {
      keyword,
      country: country.toUpperCase(),
      analyzedAt: new Date().toISOString(),
      processingTime,
      dataQuality: {
        serperDataPoints: (shopping?.shopping?.length ?? 0) + (search?.organic?.length ?? 0),
        newsArticles: sentiment?.totalArticles ?? 0,
        historicalDays: historical.length,
      },
    },
    nicheAnalysis,
    sentimentAnalysis,
    regulatoryAlerts,
    predictions,
    recommendations,
  };
}

// ================================================
// DATABASE QUERIES
// ================================================

interface HistoricalDataRow {
  date: Date;
  price: number;
  competition: number;
  demand: number;
  sentiment_score?: number;
}

async function fetchHistoricalData(
  _keyword: string,
  _country: string,
  _days: number
): Promise<HistoricalDataRow[]> {
  try {
    const result = await db.query<HistoricalDataRow>(`
      SELECT
        DATE_TRUNC('day', captured_at)::DATE as date,
        AVG(price_avg) as price,
        AVG(competition_score) as competition,
        AVG(demand_score) as demand
      FROM niche_snapshots
      WHERE keyword = $1 AND country = $2
        AND captured_at >= NOW() - ($3 || ' days')::INTERVAL
      GROUP BY DATE_TRUNC('day', captured_at)::DATE
      ORDER BY date DESC
    `, [_keyword, _country, _days]);

    return result.rows;
  } catch (error) {
    console.error('Historical data fetch failed:', error);
    return [];
  }
}

interface PriceRegressionRow {
  predicted_price: string;
  slope: string;
  intercept: string;
  r_squared: string;
  confidence: string;
  sample_size: number;
}

async function fetchPriceRegression(
  _keyword: string,
  _country: string
): Promise<{
  predictedPrice: number;
  slope: number;
  intercept: number;
  rSquared: number;
  confidence: string;
  sampleSize: number;
} | null> {
  try {
    const result = await db.query<PriceRegressionRow>(`
      SELECT
        predicted_price,
        slope,
        intercept,
        r_squared,
        confidence,
        sample_size
      FROM predict_price_trend($1, $2, 30, 7)
      LIMIT 1
    `, [_keyword, _country]);

    if (result.rows.length === 0 || result.rows[0].predicted_price === null) {
      return null;
    }

    const row = result.rows[0];
    return {
      predictedPrice: parseFloat(row.predicted_price),
      slope: parseFloat(row.slope),
      intercept: parseFloat(row.intercept),
      rSquared: parseFloat(row.r_squared),
      confidence: row.confidence,
      sampleSize: row.sample_size,
    };
  } catch (error) {
    console.error('Price regression failed:', error);
    return null;
  }
}

interface FactorImpactRow {
  factor: string;
  correlation: string;
  impact_direction: string;
  is_significant: boolean;
  interpretation: string;
}

async function fetchFactorImpact(
  _keyword: string,
  _country: string
): Promise<Array<{
  factor: string;
  correlation: number;
  impactDirection: string;
  isSignificant: boolean;
  interpretation: string;
}>> {
  try {
    const result = await db.query<FactorImpactRow>(`
      SELECT
        factor,
        correlation,
        impact_direction,
        is_significant,
        interpretation
      FROM analyze_variable_impact($1, $2, 90)
    `, [_keyword, _country]);

    return result.rows.map((row: FactorImpactRow) => ({
      factor: row.factor,
      correlation: parseFloat(row.correlation),
      impactDirection: row.impact_direction,
      isSignificant: row.is_significant,
      interpretation: row.interpretation,
    }));
  } catch (error) {
    console.error('Factor impact analysis failed:', error);
    return [];
  }
}

interface TariffRow {
  total_rate: string;
  product_category: string;
}

async function fetchTariffData(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _keyword: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _country: string
): Promise<{
  totalRate: number;
  categories: string[];
} | null> {
  try {
    // This is a simplified lookup - in production you'd map keywords to HS codes
    const result = await db.query<TariffRow>(`
      SELECT
        total_rate,
        product_category
      FROM tariff_rates
      WHERE origin_country = 'CN'
        AND destination_country = 'US'
        AND effective_date <= CURRENT_DATE
        AND (expiry_date IS NULL OR expiry_date > CURRENT_DATE)
      ORDER BY total_rate DESC
      LIMIT 5
    `);

    if (result.rows.length === 0) {
      return null;
    }

    // Return highest applicable rate as default
    return {
      totalRate: parseFloat(result.rows[0].total_rate),
      categories: result.rows.map((r: TariffRow) => r.product_category),
    };
  } catch (error) {
    console.error('Tariff data fetch failed:', error);
    return null;
  }
}

// ================================================
// HELPER FUNCTIONS
// ================================================

function calculateSentimentTrend(
  historicalData: HistoricalDataRow[]
): 'IMPROVING' | 'STABLE' | 'DECLINING' {
  if (historicalData.length < 7) return 'STABLE';

  // Compare recent week vs previous week
  const recent = historicalData.slice(0, 7);
  const older = historicalData.slice(7, 14);

  if (older.length === 0) return 'STABLE';

  const recentAvg = recent.reduce((sum, r) => sum + (r.sentiment_score || 0), 0) / recent.length;
  const olderAvg = older.reduce((sum, r) => sum + (r.sentiment_score || 0), 0) / older.length;

  const change = recentAvg - olderAvg;

  if (change > 0.1) return 'IMPROVING';
  if (change < -0.1) return 'DECLINING';
  return 'STABLE';
}

function filterRelevantAlerts(
  alerts: RegulatoryAlert[],
  keyword: string
): RegulatoryAlert[] {
  const keywordLower = keyword.toLowerCase();

  return alerts.filter(alert => {
    const text = `${alert.title} ${alert.description}`.toLowerCase();

    // Direct keyword match
    if (text.includes(keywordLower)) return true;

    // Generic e-commerce alerts
    if (text.includes('all imports') ||
        text.includes('ecommerce') ||
        text.includes('dropship') ||
        text.includes('de minimis')) return true;

    return false;
  });
}

function determinePriceTrend(slope: number): 'RISING' | 'STABLE' | 'FALLING' {
  // Slope is per-second, convert to per-day threshold
  // A slope of 0.00001 means ~$0.86 change per day
  const dailyChange = slope * 86400;

  if (dailyChange > 0.5) return 'RISING';
  if (dailyChange < -0.5) return 'FALLING';
  return 'STABLE';
}

function generateRecommendations(params: {
  nicheAnalysis: NicheAnalysis;
  sentimentAnalysis: ComprehensiveAnalysis['sentimentAnalysis'];
  predictions: ComprehensiveAnalysis['predictions'];
  regulatoryAlerts: ComprehensiveAnalysis['regulatoryAlerts'];
  historicalDataCount: number;
}): ComprehensiveAnalysis['recommendations'] {
  const { nicheAnalysis, sentimentAnalysis, predictions, regulatoryAlerts, historicalDataCount } = params;

  const warnings: string[] = [...nicheAnalysis.risks.warnings];
  const opportunities: string[] = [...nicheAnalysis.opportunities.nicheAngles];
  const reasoning: string[] = [];
  const nextSteps: string[] = [];

  let riskScore = 0;

  // ========================================
  // NICHE VERDICT IMPACT
  // ========================================

  if (nicheAnalysis.labels.verdict === 'KILL') {
    riskScore += 40;
    reasoning.push(`Market verdict: ${nicheAnalysis.labels.verdictReason}`);
  } else if (nicheAnalysis.labels.verdict === 'CAUTION') {
    riskScore += 20;
    reasoning.push(`Caution advised: ${nicheAnalysis.labels.verdictReason}`);
  } else {
    reasoning.push(`Market verdict positive: ${nicheAnalysis.labels.verdictReason}`);
  }

  // ========================================
  // SENTIMENT IMPACT
  // ========================================

  if (sentimentAnalysis.score < -0.3) {
    riskScore += 20;
    warnings.push(`Negative market sentiment (${(sentimentAnalysis.score * 100).toFixed(0)}%)`);
    reasoning.push('Negative news sentiment increases market risk');
  } else if (sentimentAnalysis.score > 0.3) {
    opportunities.push('Positive market sentiment supports entry');
    reasoning.push('Favorable news coverage indicates healthy market perception');
  }

  if (sentimentAnalysis.trend === 'DECLINING') {
    riskScore += 10;
    warnings.push('Sentiment trending negative over past week');
  }

  // ========================================
  // PREDICTION CONFIDENCE
  // ========================================

  if (predictions.confidence < 0.3 || predictions.confidenceLabel === 'INSUFFICIENT') {
    reasoning.push('Limited historical data reduces prediction confidence');
    nextSteps.push('Collect more data points before making major decisions');
  }

  if (predictions.priceTrend === 'FALLING' && predictions.confidence >= 0.4) {
    riskScore += 15;
    warnings.push(`Price trend declining (predicted ${predictions.priceChangePercent}% change)`);
  } else if (predictions.priceTrend === 'RISING' && predictions.confidence >= 0.4) {
    opportunities.push(`Price trend rising (predicted +${predictions.priceChangePercent}%)`);
  }

  // ========================================
  // REGULATORY IMPACT
  // ========================================

  if (regulatoryAlerts.hasActiveAlerts) {
    riskScore += regulatoryAlerts.alertCount * 10;
    warnings.push(`${regulatoryAlerts.alertCount} active regulatory alert(s) may impact costs`);
    nextSteps.push('Review regulatory alerts before sourcing');
  }

  if (regulatoryAlerts.tariffImpact.currentRate && regulatoryAlerts.tariffImpact.currentRate > 20) {
    riskScore += 15;
    warnings.push(`High tariff rate (${regulatoryAlerts.tariffImpact.currentRate}%) impacts margins`);
    nextSteps.push('Consider alternative sourcing countries with lower tariffs');
  }

  // ========================================
  // COMPETITION RISK
  // ========================================

  if (nicheAnalysis.scores.competition >= 70) {
    riskScore += 15;
    nextSteps.push('Identify differentiation strategy before entry');
  }

  if (nicheAnalysis.competition.bigPlayerPresence.length > 0) {
    const bigPlayers = nicheAnalysis.competition.bigPlayerPresence.join(', ');
    warnings.push(`Big players active: ${bigPlayers}`);
    nextSteps.push('Avoid direct competition with major marketplaces');
  }

  // ========================================
  // DATA QUALITY CHECK
  // ========================================

  if (historicalDataCount < 7) {
    reasoning.push('Limited historical data - predictions may be less reliable');
    nextSteps.push('Monitor market for 1-2 weeks before major investment');
  }

  // ========================================
  // DETERMINE ACTION
  // ========================================

  let action: 'ENTER' | 'WAIT' | 'AVOID';

  if (riskScore >= 50 || nicheAnalysis.labels.verdict === 'KILL') {
    action = 'AVOID';
    reasoning.push('Risk factors exceed acceptable threshold for entry');
    nextSteps.push('Consider pivoting to related niche');
    nextSteps.push('Research less competitive alternatives');
  } else if (riskScore >= 25 || nicheAnalysis.labels.verdict === 'CAUTION') {
    action = 'WAIT';
    reasoning.push('Market conditions suggest caution - monitor before entry');
    nextSteps.push('Run small test campaign ($50-100) before inventory commitment');
    nextSteps.push('Monitor sentiment and regulatory changes');
  } else {
    action = 'ENTER';
    reasoning.push('Market conditions favorable for entry');
    nextSteps.push(`Target entry price: ${nicheAnalysis.pricing.currency}${nicheAnalysis.pricing.suggestedEntry}`);
    nextSteps.push('Source products from 2-3 suppliers for testing');
    if (nicheAnalysis.demand.buyerQuestions.length > 0) {
      nextSteps.push(`Address buyer question in listing: "${nicheAnalysis.demand.buyerQuestions[0].question}"`);
    }
  }

  // Ensure unique items
  const uniqueWarnings = [...new Set(warnings)];
  const uniqueOpportunities = [...new Set(opportunities)];
  const uniqueNextSteps = [...new Set(nextSteps)];

  return {
    action,
    reasoning,
    riskLevel: riskScore >= 40 ? 'HIGH' : riskScore >= 20 ? 'MEDIUM' : 'LOW',
    riskScore,
    opportunities: uniqueOpportunities.slice(0, 5),
    warnings: uniqueWarnings.slice(0, 5),
    nextSteps: uniqueNextSteps.slice(0, 5),
  };
}

// ================================================
// DATABASE STORAGE
// ================================================

async function storeSnapshot(
  keyword: string,
  country: string,
  niche: NicheAnalysis,
  sentiment: SentimentAggregation | null
): Promise<void> {
  try {
    // Store niche snapshot
    await db.query(`
      INSERT INTO niche_snapshots (
        keyword, country, captured_at,
        price_min, price_max, price_avg, price_median, price_dispersion, price_currency,
        total_sellers, unique_sellers, marketplace_dominance, top3_concentration, review_barrier,
        keyword_variations, buyer_questions, organic_results,
        overall_score, opportunity_score, competition_score, demand_score, price_health_score,
        verdict, verdict_reason
      ) VALUES (
        $1, $2, NOW(),
        $3, $4, $5, $6, $7, $8,
        $9, $10, $11, $12, $13,
        $14, $15, $16,
        $17, $18, $19, $20, $21,
        $22, $23
      )
    `, [
      keyword, country,
      niche.pricing.min, niche.pricing.max, niche.pricing.avg,
      niche.pricing.median, niche.pricing.priceDispersion, niche.pricing.currency,
      niche.competition.totalSellers, niche.competition.uniqueSellers,
      niche.competition.marketplaceDominance, niche.competition.top3Concentration,
      niche.competition.reviewBarrier,
      niche.demand.keywordCount, niche.demand.questionCount, niche.demand.searchResultCount,
      niche.scores.overall, niche.scores.opportunity, niche.scores.competition,
      niche.scores.demand, niche.scores.priceHealth,
      niche.labels.verdict, niche.labels.verdictReason
    ]);

    // Store sentiment if available
    if (sentiment) {
      await db.query(`
        INSERT INTO news_sentiment (
          keyword, captured_at,
          positive_count, neutral_count, negative_count, total_articles,
          sentiment_score, unique_sources, confidence,
          top_positive_headlines, top_negative_headlines
        ) VALUES (
          $1, NOW(),
          $2, $3, $4, $5,
          $6, $7, $8,
          $9, $10
        )
      `, [
        keyword,
        sentiment.positiveCount, sentiment.neutralCount, sentiment.negativeCount,
        sentiment.totalArticles, sentiment.sentimentScore, sentiment.uniqueSources,
        sentiment.confidence,
        JSON.stringify(sentiment.topPositiveHeadlines),
        JSON.stringify(sentiment.topNegativeHeadlines)
      ]);
    }
  } catch (error) {
    // Log but don't fail the analysis
    console.error('Failed to store snapshot:', error);
  }
}

// ================================================
// BATCH ANALYSIS (for scheduled jobs)
// ================================================

export async function batchAnalyzeKeywords(
  keywords: string[],
  country: string
): Promise<Map<string, ComprehensiveAnalysis>> {
  const results = new Map<string, ComprehensiveAnalysis>();

  // Process in chunks of 3 to respect rate limits
  const chunkSize = 3;

  for (let i = 0; i < keywords.length; i += chunkSize) {
    const chunk = keywords.slice(i, i + chunkSize);

    const analyses = await Promise.all(
      chunk.map(kw =>
        comprehensiveAnalysis(kw, country)
          .catch(err => {
            console.error(`Analysis failed for ${kw}:`, err);
            return null;
          })
      )
    );

    chunk.forEach((kw, idx) => {
      if (analyses[idx]) {
        results.set(kw, analyses[idx]!);
      }
    });

    // Rate limit pause between chunks
    if (i + chunkSize < keywords.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return results;
}
