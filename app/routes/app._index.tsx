/**
 * Market Oracle - Shopify Embedded App UI
 * React Router + Shopify Polaris Components (Correct API)
 * Author: Javad Gasimli
 *
 * Type fixes applied:
 * - Text tone: "warning" → "caution" (Polaris Text doesn't support "warning")
 * - DataTable rows: All values converted to strings
 * - Badge children: Ensured single ReactNode, not string[]
 */

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { useFetcher } from "react-router";
import { useState, useCallback } from "react";
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  Select,
  Button,
  Banner,
  Text,
  BlockStack,
  InlineStack,
  Box,
  Badge,
  Divider,
  DataTable,
  List,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import { comprehensiveAnalysis } from "../services/analyze.server";
import type { ComprehensiveAnalysis } from "../services/analyze.server";

// ================================================
// ROUTE HANDLERS
// ================================================

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  await authenticate.admin(request);

  const formData = await request.formData();
  const keyword = formData.get("keyword") as string;
  const country = (formData.get("country") as string) || "us";

  if (!keyword || keyword.trim().length < 2) {
    return { error: "Please enter a valid keyword (at least 2 characters)" };
  }

  try {
    const analysis = await comprehensiveAnalysis(keyword.trim(), country);
    return { analysis, error: null };
  } catch (error) {
    console.error("Analysis failed:", error);
    return { error: "Analysis failed. Please try again.", analysis: null };
  }
};

// ================================================
// MAIN COMPONENT
// ================================================

interface ActionData {
  analysis: ComprehensiveAnalysis | null;
  error: string | null;
}

export default function MarketOracle() {
  const fetcher = useFetcher<ActionData>();
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("us");

  const isLoading = fetcher.state !== "idle";
  const data = fetcher.data;
  const analysis = data?.analysis;
  const error = data?.error;

  const handleSubmit = useCallback(() => {
    if (keyword.trim().length >= 2) {
      fetcher.submit({ keyword: keyword.trim(), country }, { method: "POST" });
    }
  }, [keyword, country, fetcher]);

  const handleKeywordChange = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  const handleCountryChange = useCallback((value: string) => {
    setCountry(value);
  }, []);

  const countryOptions = [
    { value: "us", label: "🇺🇸 United States" },
    { value: "gb", label: "🇬🇧 United Kingdom" },
    { value: "de", label: "🇩🇪 Germany" },
    { value: "fr", label: "🇫🇷 France" },
    { value: "ca", label: "🇨🇦 Canada" },
    { value: "au", label: "🇦🇺 Australia" },
  ];

  return (
    <Page title="Market Oracle" subtitle="AI-Powered Market Intelligence for E-commerce">
      <Layout>
        {/* Search Section */}
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <fetcher.Form
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <FormLayout>
                  <FormLayout.Group>
                    <TextField
                      label="Product or Niche"
                      value={keyword}
                      onChange={handleKeywordChange}
                      placeholder="e.g., wireless earbuds, yoga mat, phone case"
                      autoComplete="off"
                      helpText="Enter a product name or category to analyze"
                    />
                    <Select
                      label="Target Market"
                      options={countryOptions}
                      value={country}
                      onChange={handleCountryChange}
                    />
                  </FormLayout.Group>
                  <Button
                    submit
                    variant="primary"
                    loading={isLoading}
                    disabled={keyword.trim().length < 2}
                  >
                    Analyze Market
                  </Button>
                </FormLayout>
              </fetcher.Form>

              {error && (
                <Banner title="Analysis Error" tone="critical">
                  <p>{error}</p>
                </Banner>
              )}
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* Results */}
        {analysis && (
          <>
            {/* Action Banner */}
            <Layout.Section>
              <ActionBanner
                recommendation={analysis.recommendations}
                keyword={analysis.meta.keyword}
              />
            </Layout.Section>

            {/* Score Overview */}
            <Layout.Section>
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Market Health Scores
                  </Text>
                  <ScoreGrid
                    scores={analysis.nicheAnalysis.scores}
                    sentiment={analysis.sentimentAnalysis.score}
                  />
                </BlockStack>
              </Card>
            </Layout.Section>

            {/* Price Intelligence */}
            <Layout.Section>
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Price Intelligence
                  </Text>
                  <PriceIntelligence
                    pricing={analysis.nicheAnalysis.pricing}
                    predictions={analysis.predictions}
                  />
                </BlockStack>
              </Card>
            </Layout.Section>

            {/* Regulatory Alerts */}
            {analysis.regulatoryAlerts.hasActiveAlerts && (
              <Layout.Section>
                <Card>
                  <BlockStack gap="400">
                    <Text as="h2" variant="headingMd">
                      ⚠️ Active Alerts
                    </Text>
                    <RegulatoryAlerts alerts={analysis.regulatoryAlerts} />
                  </BlockStack>
                </Card>
              </Layout.Section>
            )}

            {/* Market Sentiment */}
            <Layout.Section>
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Market Sentiment
                  </Text>
                  <SentimentAnalysis sentiment={analysis.sentimentAnalysis} />
                </BlockStack>
              </Card>
            </Layout.Section>

            {/* Competition Breakdown */}
            <Layout.Section>
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Competition Analysis
                  </Text>
                  <CompetitionBreakdown
                    competition={analysis.nicheAnalysis.competition}
                  />
                </BlockStack>
              </Card>
            </Layout.Section>

            {/* Demand Signals */}
            <Layout.Section>
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Demand Signals
                  </Text>
                  <DemandSignals demand={analysis.nicheAnalysis.demand} />
                </BlockStack>
              </Card>
            </Layout.Section>

            {/* Price Factors */}
            {analysis.predictions.factors.length > 0 && (
              <Layout.Section>
                <Card>
                  <BlockStack gap="400">
                    <Text as="h2" variant="headingMd">
                      Price Factor Analysis
                    </Text>
                    <FactorAnalysis factors={analysis.predictions.factors} />
                  </BlockStack>
                </Card>
              </Layout.Section>
            )}

            {/* Recommendations */}
            <Layout.Section>
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Actionable Recommendations
                  </Text>
                  <RecommendationDetails
                    recommendation={analysis.recommendations}
                  />
                </BlockStack>
              </Card>
            </Layout.Section>

            {/* Top Products */}
            {analysis.nicheAnalysis.topProducts.length > 0 && (
              <Layout.Section>
                <Card>
                  <BlockStack gap="400">
                    <Text as="h2" variant="headingMd">
                      Top Products by Reviews
                    </Text>
                    <TopProducts products={analysis.nicheAnalysis.topProducts} />
                  </BlockStack>
                </Card>
              </Layout.Section>
            )}

            {/* Meta Info */}
            <Layout.Section>
              <Box padding="200">
                <Text as="p" tone="subdued" variant="bodySm">
                  Analysis completed in {analysis.meta.processingTime}ms ·{" "}
                  {analysis.meta.dataQuality.serperDataPoints} product data points
                  · {analysis.meta.dataQuality.newsArticles} news articles
                  analyzed · {analysis.meta.dataQuality.historicalDays} days of
                  historical data
                </Text>
              </Box>
            </Layout.Section>
          </>
        )}
      </Layout>
    </Page>
  );
}

// ================================================
// SUB-COMPONENTS
// ================================================

function ActionBanner({
  recommendation,
  keyword,
}: {
  recommendation: ComprehensiveAnalysis["recommendations"];
  keyword: string;
}) {
  const toneMap = {
    ENTER: "success" as const,
    WAIT: "warning" as const,
    AVOID: "critical" as const,
  };

  const iconMap = {
    ENTER: "✅",
    WAIT: "⏳",
    AVOID: "❌",
  };

  const titleMap = {
    ENTER: "Market Entry Recommended",
    WAIT: "Proceed with Caution",
    AVOID: "Market Entry Not Recommended",
  };

  const riskToneMap = {
    LOW: "success" as const,
    MEDIUM: "warning" as const,
    HIGH: "critical" as const,
  };

  return (
    <Banner
      title={`${iconMap[recommendation.action]} ${titleMap[recommendation.action]}`}
      tone={toneMap[recommendation.action]}
    >
      <BlockStack gap="200">
        <InlineStack gap="200" align="start">
          <Badge tone={riskToneMap[recommendation.riskLevel]}>
            {`${recommendation.riskLevel} RISK`}
          </Badge>
        </InlineStack>
        <Text as="p">
          <strong>&quot;{keyword}&quot;</strong> — {recommendation.reasoning[0]}
        </Text>
      </BlockStack>
    </Banner>
  );
}

function ScoreGrid({
  scores,
  sentiment,
}: {
  scores: ComprehensiveAnalysis["nicheAnalysis"]["scores"];
  sentiment: number;
}) {
  const sentimentScore = Math.round((sentiment + 1) * 50);

  const scoreData = [
    { title: "Overall", score: scores.overall, subtitle: "Combined health" },
    { title: "Opportunity", score: scores.opportunity, subtitle: "Entry potential" },
    { title: "Demand", score: scores.demand, subtitle: "Search interest" },
    { title: "Competition", score: 100 - scores.competition, subtitle: "Lower = harder" },
    { title: "Price Health", score: scores.priceHealth, subtitle: "Margin potential" },
    { title: "Sentiment", score: sentimentScore, subtitle: "News tone" },
  ];

  return (
    <InlineStack gap="400" wrap>
      {scoreData.map((item) => (
        <ScoreCard
          key={item.title}
          title={item.title}
          score={item.score}
          subtitle={item.subtitle}
        />
      ))}
    </InlineStack>
  );
}

function ScoreCard({
  title,
  score,
  subtitle,
}: {
  title: string;
  score: number;
  subtitle: string;
}) {
  /**
   * FIX: Polaris Text component 'tone' prop accepts:
   * "subdued" | "success" | "critical" | "caution" | "magic" | "text-inverse" | undefined
   *
   * It does NOT accept "warning". Use "caution" for mid-range warning states.
   */
  const getTone = (s: number): "success" | "caution" | "critical" => {
    if (s >= 60) return "success";
    if (s >= 35) return "caution";
    return "critical";
  };

  return (
    <Box
      padding="400"
      borderWidth="025"
      borderRadius="200"
      borderColor="border"
      minWidth="120px"
    >
      <BlockStack gap="100" align="center">
        <Text as="p" tone="subdued" variant="bodySm">
          {title}
        </Text>
        <Text as="p" variant="headingLg" tone={getTone(score)}>
          {score}
        </Text>
        <Text as="p" tone="subdued" variant="bodySm">
          {subtitle}
        </Text>
      </BlockStack>
    </Box>
  );
}

function PriceIntelligence({
  pricing,
  predictions,
}: {
  pricing: ComprehensiveAnalysis["nicheAnalysis"]["pricing"];
  predictions: ComprehensiveAnalysis["predictions"];
}) {
  const trendIcon = {
    RISING: "📈",
    STABLE: "➡️",
    FALLING: "📉",
  };

  return (
    <BlockStack gap="400">
      <InlineStack gap="600" wrap>
        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Price Range
          </Text>
          <Text as="p" variant="headingMd">
            {pricing.currency}
            {pricing.min} – {pricing.currency}
            {pricing.max}
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            Average: {pricing.currency}
            {pricing.avg}
          </Text>
        </BlockStack>

        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Suggested Entry
          </Text>
          <Text as="p" variant="headingMd" tone="success">
            {pricing.currency}
            {pricing.suggestedEntry}
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            25th percentile
          </Text>
        </BlockStack>

        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            7-Day Forecast
          </Text>
          <Text as="p" variant="headingMd">
            {trendIcon[predictions.priceTrend]}{" "}
            {predictions.priceChangePercent !== null ? (
              <>
                {predictions.priceChangePercent > 0 ? "+" : ""}
                {predictions.priceChangePercent}%
              </>
            ) : (
              "N/A"
            )}
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            {predictions.confidenceLabel} confidence (
            {Math.round(predictions.confidence * 100)}%)
          </Text>
        </BlockStack>

        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Price Dispersion
          </Text>
          <Text as="p" variant="headingMd">
            {(pricing.priceDispersion * 100).toFixed(0)}%
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            {pricing.priceDispersion > 0.5
              ? "High (pricing freedom)"
              : pricing.priceDispersion > 0.3
                ? "Moderate"
                : "Low (tight competition)"}
          </Text>
        </BlockStack>
      </InlineStack>

      <Divider />

      <BlockStack gap="200">
        <Text as="p" tone="subdued">
          Price Distribution
        </Text>
        <InlineStack gap="200" wrap>
          {/*
           * FIX: Badge children must be a single string, not string[].
           * JSX interpolation like "text: {value}" creates ["text: ", value] array.
           * Template literals create a single concatenated string.
           */}
          <Badge>{`Under $25: ${pricing.distribution.under25}`}</Badge>
          <Badge>{`$25-50: ${pricing.distribution.tier25to50}`}</Badge>
          <Badge>{`$50-100: ${pricing.distribution.tier50to100}`}</Badge>
          <Badge>{`$100+: ${pricing.distribution.over100}`}</Badge>
        </InlineStack>
      </BlockStack>
    </BlockStack>
  );
}

function RegulatoryAlerts({
  alerts,
}: {
  alerts: ComprehensiveAnalysis["regulatoryAlerts"];
}) {
  return (
    <BlockStack gap="300">
      {alerts.tariffImpact.currentRate !== null && (
        <Banner tone="warning">
          <Text as="p">
            <strong>Estimated Tariff Rate:</strong>{" "}
            {alerts.tariffImpact.currentRate}%
            {alerts.tariffImpact.affectedCategories.length > 0 && (
              <>
                {" "}
                (Categories:{" "}
                {alerts.tariffImpact.affectedCategories.slice(0, 3).join(", ")})
              </>
            )}
          </Text>
        </Banner>
      )}

      {alerts.alerts.map((alert, i) => (
        <Box
          key={i}
          padding="400"
          borderWidth="025"
          borderRadius="200"
          borderColor="border"
        >
          <BlockStack gap="200">
            <InlineStack gap="200" align="start">
              <Text as="h3" variant="headingSm">
                {alert.title}
              </Text>
              <Badge tone={alert.severity === "CRITICAL" ? "critical" : "warning"}>
                {alert.severity}
              </Badge>
            </InlineStack>
            <Text as="p">{alert.description}</Text>
            <Text as="p" tone="subdued" variant="bodySm">
              Source: {alert.source} ·{" "}
              {new Date(alert.publishedAt).toLocaleDateString()}
            </Text>
          </BlockStack>
        </Box>
      ))}
    </BlockStack>
  );
}

function SentimentAnalysis({
  sentiment,
}: {
  sentiment: ComprehensiveAnalysis["sentimentAnalysis"];
}) {
  const total =
    sentiment.distribution.positive +
    sentiment.distribution.neutral +
    sentiment.distribution.negative;

  /**
   * FIX: Text tone doesn't accept "warning".
   * Valid values: "subdued" | "success" | "critical" | "caution" | "magic" | "text-inverse" | undefined
   */
  const getSentimentTone = (): "success" | "critical" | undefined => {
    if (sentiment.score > 0.3) return "success";
    if (sentiment.score < -0.3) return "critical";
    return undefined;
  };

  return (
    <BlockStack gap="400">
      <InlineStack gap="600" wrap>
        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Sentiment Score
          </Text>
          <Text as="p" variant="headingMd" tone={getSentimentTone()}>
            {sentiment.score > 0 ? "+" : ""}
            {(sentiment.score * 100).toFixed(0)}%
          </Text>
        </BlockStack>

        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Trend
          </Text>
          <Text as="p" variant="headingMd">
            {sentiment.trend === "IMPROVING"
              ? "📈 Improving"
              : sentiment.trend === "DECLINING"
                ? "📉 Declining"
                : "➡️ Stable"}
          </Text>
        </BlockStack>

        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Distribution ({total} articles)
          </Text>
          <InlineStack gap="200">
            <Badge tone="success">{`✓ ${sentiment.distribution.positive}`}</Badge>
            <Badge>{`○ ${sentiment.distribution.neutral}`}</Badge>
            <Badge tone="critical">{`✗ ${sentiment.distribution.negative}`}</Badge>
          </InlineStack>
        </BlockStack>
      </InlineStack>

      {(sentiment.topPositiveHeadlines.length > 0 ||
        sentiment.topNegativeHeadlines.length > 0) && (
        <>
          <Divider />
          <InlineStack gap="600" wrap align="start">
            {sentiment.topPositiveHeadlines.length > 0 && (
              <BlockStack gap="200">
                <Text as="p" tone="subdued">
                  Positive Headlines
                </Text>
                <List type="bullet">
                  {sentiment.topPositiveHeadlines.slice(0, 3).map((h, i) => (
                    <List.Item key={i}>{h}</List.Item>
                  ))}
                </List>
              </BlockStack>
            )}

            {sentiment.topNegativeHeadlines.length > 0 && (
              <BlockStack gap="200">
                <Text as="p" tone="subdued">
                  Negative Headlines
                </Text>
                <List type="bullet">
                  {sentiment.topNegativeHeadlines.slice(0, 3).map((h, i) => (
                    <List.Item key={i}>{h}</List.Item>
                  ))}
                </List>
              </BlockStack>
            )}
          </InlineStack>
        </>
      )}
    </BlockStack>
  );
}

function CompetitionBreakdown({
  competition,
}: {
  competition: ComprehensiveAnalysis["nicheAnalysis"]["competition"];
}) {
  /**
   * FIX: DataTable rows must be string[][] - all values must be strings.
   * Ensure .toString() or String() conversion for any numeric values.
   */
  const tableRows: string[][] = competition.topSellers.map((seller) => [
    seller.name,
    String(seller.count),
    `${seller.share}%`,
  ]);

  return (
    <BlockStack gap="400">
      <InlineStack gap="600" wrap>
        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Total Sellers
          </Text>
          <Text as="p" variant="headingMd">
            {competition.uniqueSellers}
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            unique / {competition.totalSellers} listings
          </Text>
        </BlockStack>

        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Marketplace Share
          </Text>
          <Text as="p" variant="headingMd">
            {competition.marketplaceDominance}%
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            Amazon/eBay/Walmart
          </Text>
        </BlockStack>

        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Top 3 Concentration
          </Text>
          <Text as="p" variant="headingMd">
            {competition.top3Concentration}%
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            market share
          </Text>
        </BlockStack>

        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Review Barrier
          </Text>
          <Text as="p" variant="headingMd">
            {competition.reviewBarrier}
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            avg reviews (top 5) —{" "}
            {competition.reviewBarrier > 500
              ? "Very high"
              : competition.reviewBarrier > 200
                ? "Moderate"
                : "Low"}
          </Text>
        </BlockStack>
      </InlineStack>

      {competition.bigPlayerPresence.length > 0 && (
        <Banner tone="warning">
          <Text as="p">
            Big players active: {competition.bigPlayerPresence.join(", ")}
          </Text>
        </Banner>
      )}

      <Divider />

      <DataTable
        columnContentTypes={["text", "numeric", "numeric"]}
        headings={["Seller", "Listings", "Market Share"]}
        rows={tableRows}
      />
    </BlockStack>
  );
}

function DemandSignals({
  demand,
}: {
  demand: ComprehensiveAnalysis["nicheAnalysis"]["demand"];
}) {
  return (
    <BlockStack gap="400">
      {demand.demandSignals.length > 0 && (
        <InlineStack gap="200" wrap>
          {demand.demandSignals.map((signal, i) => (
            <Badge key={i} tone="success">
              {signal}
            </Badge>
          ))}
        </InlineStack>
      )}

      <InlineStack gap="600" wrap>
        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Keyword Variations
          </Text>
          <Text as="p" variant="headingMd">
            {demand.keywordCount}
          </Text>
        </BlockStack>
        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Buyer Questions
          </Text>
          <Text as="p" variant="headingMd">
            {demand.questionCount}
          </Text>
        </BlockStack>
        <BlockStack gap="100">
          <Text as="p" tone="subdued">
            Search Results
          </Text>
          <Text as="p" variant="headingMd">
            {demand.searchResultCount}
          </Text>
        </BlockStack>
      </InlineStack>

      {demand.buyerQuestions.length > 0 && (
        <>
          <Divider />
          <BlockStack gap="200">
            <Text as="p" tone="subdued">
              Buyer Questions (address these in your listing)
            </Text>
            <List type="bullet">
              {demand.buyerQuestions.slice(0, 5).map((q, i) => (
                <List.Item key={i}>{q.question}</List.Item>
              ))}
            </List>
          </BlockStack>
        </>
      )}

      {demand.relatedKeywords.length > 0 && (
        <>
          <Divider />
          <BlockStack gap="200">
            <Text as="p" tone="subdued">
              Related Keywords
            </Text>
            <Text as="p">{demand.relatedKeywords.slice(0, 10).join(" · ")}</Text>
          </BlockStack>
        </>
      )}
    </BlockStack>
  );
}

function FactorAnalysis({
  factors,
}: {
  factors: ComprehensiveAnalysis["predictions"]["factors"];
}) {
  /**
   * FIX: DataTable rows require string[][].
   * - factor.correlation is number → use .toFixed(3) which returns string
   * - All other fields should already be strings
   */
  const tableRows: string[][] = factors.map((factor) => [
    factor.name,
    factor.correlation.toFixed(3),
    factor.direction,
    factor.isSignificant ? "✓ Yes" : "✗ No",
    factor.interpretation,
  ]);

  return (
    <DataTable
      columnContentTypes={["text", "numeric", "text", "text", "text"]}
      headings={["Factor", "Correlation", "Direction", "Significant", "Interpretation"]}
      rows={tableRows}
    />
  );
}

function RecommendationDetails({
  recommendation,
}: {
  recommendation: ComprehensiveAnalysis["recommendations"];
}) {
  return (
    <InlineStack gap="400" wrap align="start">
      {recommendation.warnings.length > 0 && (
        <Box padding="400" borderWidth="025" borderRadius="200" borderColor="border">
          <BlockStack gap="200">
            <Text as="h3" variant="headingSm">
              ⚠️ Risk Factors
            </Text>
            <List type="bullet">
              {recommendation.warnings.map((w, i) => (
                <List.Item key={i}>{w}</List.Item>
              ))}
            </List>
          </BlockStack>
        </Box>
      )}

      {recommendation.opportunities.length > 0 && (
        <Box padding="400" borderWidth="025" borderRadius="200" borderColor="border">
          <BlockStack gap="200">
            <Text as="h3" variant="headingSm">
              💡 Opportunities
            </Text>
            <List type="bullet">
              {recommendation.opportunities.map((o, i) => (
                <List.Item key={i}>{o}</List.Item>
              ))}
            </List>
          </BlockStack>
        </Box>
      )}

      <Box padding="400" borderWidth="025" borderRadius="200" borderColor="border">
        <BlockStack gap="200">
          <Text as="h3" variant="headingSm">
            📋 Next Steps
          </Text>
          <List type="number">
            {recommendation.nextSteps.map((step, i) => (
              <List.Item key={i}>{step}</List.Item>
            ))}
          </List>
        </BlockStack>
      </Box>
    </InlineStack>
  );
}

function TopProducts({
  products,
}: {
  products: ComprehensiveAnalysis["nicheAnalysis"]["topProducts"];
}) {
  /**
   * FIX: DataTable rows require string[][].
   * - product.price might be number or string - ensure String() conversion
   * - product.rating is number - template literal handles conversion
   * - product.reviews is number - toLocaleString() returns string
   */
  const tableRows: string[][] = products.map((product) => [
    product.title.length > 60
      ? `${product.title.substring(0, 60)}...`
      : product.title,
    String(product.price),
    product.rating ? `${product.rating}⭐` : "N/A",
    product.reviews != null ? product.reviews.toLocaleString() : "N/A",
    product.source,
  ]);

  return (
    <DataTable
      columnContentTypes={["text", "text", "text", "numeric", "text"]}
      headings={["Product", "Price", "Rating", "Reviews", "Seller"]}
      rows={tableRows}
    />
  );
}
