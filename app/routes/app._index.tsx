import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { useFetcher } from "react-router";
import { authenticate } from "../shopify.server";
import { analyzeKeyword } from "../services/analyze.server";
import type { NicheAnalysis } from "../services/nicheAnalysis.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  await authenticate.admin(request);
  const formData = await request.formData();
  const keyword = formData.get("keyword") as string;
  const country = (formData.get("country") as string) || "us";
  return analyzeKeyword(keyword, country);
};

interface AnalyzeResult {
  raw: { keyword: string; country: string };
  analysis: NicheAnalysis;
}

export default function Index() {
  const fetcher = useFetcher<typeof action>();
  const isLoading = ["loading", "submitting"].includes(fetcher.state);
  const data = fetcher.data as AnalyzeResult | undefined;
  const a = data?.analysis;

  return (
    <s-page heading="Market Oracle">
      <s-section>
        <fetcher.Form method="post">
          <s-stack direction="inline" gap="base">
            <input type="text" name="keyword" placeholder="Enter product or niche" style={{ padding: 10, fontSize: 16, width: 320, borderRadius: 6, border: "1px solid #ccc" }} />
            <select name="country" style={{ padding: 10, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" }}>
              <option value="us">US</option>
              <option value="gb">UK</option>
              <option value="de">DE</option>
              <option value="fr">FR</option>
              <option value="ca">CA</option>
            </select>
            <s-button type="submit" variant="primary" {...(isLoading ? { loading: true } : {})}>Analyze</s-button>
          </s-stack>
        </fetcher.Form>
      </s-section>

      {a && (
        <>
          {/* Header */}
          <s-section>
            <s-stack direction="inline" gap="base">
              <div>
                <s-heading>{a.meta.keyword}</s-heading>
                <s-paragraph>{a.meta.country.toUpperCase()} · {a.meta.signalCount} signals</s-paragraph>
              </div>
              <s-badge tone={a.labels.verdict === "GO" ? "success" : a.labels.verdict === "KILL" ? "critical" : "warning"}>
                {a.labels.verdict}: {a.labels.verdictReason}
              </s-badge>
            </s-stack>
          </s-section>

          {/* Scores */}
          <s-section heading="Scores">
            <s-stack direction="inline" gap="base">
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Overall</s-paragraph>
                <s-heading>{Math.round(a.scores.overall)}</s-heading>
              </s-box>
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Opportunity</s-paragraph>
                <s-heading>{Math.round(a.scores.opportunity)}</s-heading>
              </s-box>
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Demand</s-paragraph>
                <s-heading>{Math.round(a.scores.demand)}</s-heading>
              </s-box>
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Competition</s-paragraph>
                <s-heading>{Math.round(100 - a.scores.competition)}</s-heading>
              </s-box>
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Price Health</s-paragraph>
                <s-heading>{Math.round(a.scores.priceHealth)}</s-heading>
              </s-box>
            </s-stack>
          </s-section>

          {/* Pricing */}
          <s-section heading="Price Intelligence">
            <s-stack direction="inline" gap="base">
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Min</s-paragraph>
                <s-heading>{a.pricing.currency}{a.pricing.min}</s-heading>
              </s-box>
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Avg</s-paragraph>
                <s-heading>{a.pricing.currency}{a.pricing.avg}</s-heading>
              </s-box>
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Max</s-paragraph>
                <s-heading>{a.pricing.currency}{a.pricing.max}</s-heading>
              </s-box>
              <s-box padding="base" borderWidth="base" borderRadius="base">
                <s-paragraph>Suggested Entry</s-paragraph>
                <s-heading>{a.pricing.currency}{a.pricing.suggestedEntry}</s-heading>
                <s-paragraph>25th percentile - undercut avg without racing to bottom</s-paragraph>
              </s-box>
            </s-stack>
          </s-section>

          {/* Price Distribution Table */}
          <s-section heading="Price Distribution">
            <s-table>
              <s-table-header>
                <s-table-row>
                  <s-table-cell>Range</s-table-cell>
                  <s-table-cell>Count</s-table-cell>
                  <s-table-cell>Share</s-table-cell>
                </s-table-row>
              </s-table-header>
              <s-table-body>
                <s-table-row>
                  <s-table-cell>Under $25</s-table-cell>
                  <s-table-cell>{a.pricing.distribution.under25}</s-table-cell>
                  <s-table-cell>{a.competition.totalSellers > 0 ? Math.round((a.pricing.distribution.under25 / a.competition.totalSellers) * 100) : 0}%</s-table-cell>
                </s-table-row>
                <s-table-row>
                  <s-table-cell>$25 - $50</s-table-cell>
                  <s-table-cell>{a.pricing.distribution.tier25to50}</s-table-cell>
                  <s-table-cell>{a.competition.totalSellers > 0 ? Math.round((a.pricing.distribution.tier25to50 / a.competition.totalSellers) * 100) : 0}%</s-table-cell>
                </s-table-row>
                <s-table-row>
                  <s-table-cell>$50 - $100</s-table-cell>
                  <s-table-cell>{a.pricing.distribution.tier50to100}</s-table-cell>
                  <s-table-cell>{a.competition.totalSellers > 0 ? Math.round((a.pricing.distribution.tier50to100 / a.competition.totalSellers) * 100) : 0}%</s-table-cell>
                </s-table-row>
                <s-table-row>
                  <s-table-cell>$100+</s-table-cell>
                  <s-table-cell>{a.pricing.distribution.over100}</s-table-cell>
                  <s-table-cell>{a.competition.totalSellers > 0 ? Math.round((a.pricing.distribution.over100 / a.competition.totalSellers) * 100) : 0}%</s-table-cell>
                </s-table-row>
              </s-table-body>
            </s-table>
          </s-section>

          {/* Competition Table */}
          <s-section heading="Competition Breakdown">
            <s-paragraph>{a.competition.uniqueSellers} unique sellers · {a.competition.totalSellers} total listings · {a.competition.marketplaceDominance}% marketplace dominance</s-paragraph>
            {a.competition.bigPlayerPresence.length > 0 && (
              <s-banner tone="warning">Big players active: {a.competition.bigPlayerPresence.join(", ")}</s-banner>
            )}
            <s-table>
              <s-table-header>
                <s-table-row>
                  <s-table-cell>Seller</s-table-cell>
                  <s-table-cell>Listings</s-table-cell>
                  <s-table-cell>Market Share</s-table-cell>
                </s-table-row>
              </s-table-header>
              <s-table-body>
                {a.competition.topSellers.map((s, i) => (
                  <s-table-row key={i}>
                    <s-table-cell>{s.name}</s-table-cell>
                    <s-table-cell>{s.count}</s-table-cell>
                    <s-table-cell>{s.share}%</s-table-cell>
                  </s-table-row>
                ))}
              </s-table-body>
            </s-table>
            <s-paragraph>Review barrier: {a.competition.reviewBarrier} avg reviews (top 5 products) - {a.competition.reviewBarrier > 500 ? "Very high barrier to entry" : a.competition.reviewBarrier > 200 ? "Moderate barrier" : "Low barrier, easier to compete"}</s-paragraph>
          </s-section>

          {/* Warnings */}
          {a.risks.warnings.length > 0 && (
            <s-section heading="Risk Factors">
              {a.risks.warnings.map((w, i) => (
                <s-banner key={i} tone="warning">{w}</s-banner>
              ))}
            </s-section>
          )}

          {/* Demand */}
          <s-section heading="Demand Signals">
            {a.demand.demandSignals.length > 0 && (
              <s-paragraph>
                {a.demand.demandSignals.map((s, i) => (
                  <s-badge key={i} tone="success">{s}</s-badge>
                ))}
              </s-paragraph>
            )}
            {a.demand.buyerQuestions.length > 0 && (
              <>
                <s-heading>Buyer Questions ({a.demand.questionCount})</s-heading>
                <s-unordered-list>
                  {a.demand.buyerQuestions.map((q, i) => (
                    <s-list-item key={i}>{q.question}</s-list-item>
                  ))}
                </s-unordered-list>
              </>
            )}
            {a.demand.relatedKeywords.length > 0 && (
              <>
                <s-heading>Related Keywords ({a.demand.keywordCount})</s-heading>
                <s-paragraph>{a.demand.relatedKeywords.join(" · ")}</s-paragraph>
              </>
            )}
          </s-section>

          {/* Top Products */}
          {a.topProducts.length > 0 && (
            <s-section heading="Top Products by Reviews">
              <s-table>
                <s-table-header>
                  <s-table-row>
                    <s-table-cell>Product</s-table-cell>
                    <s-table-cell>Price</s-table-cell>
                    <s-table-cell>Rating</s-table-cell>
                    <s-table-cell>Reviews</s-table-cell>
                    <s-table-cell>Seller</s-table-cell>
                  </s-table-row>
                </s-table-header>
                <s-table-body>
                  {a.topProducts.map((p, i) => (
                    <s-table-row key={i}>
                      <s-table-cell>{p.title}</s-table-cell>
                      <s-table-cell>{p.price}</s-table-cell>
                      <s-table-cell>{p.rating}</s-table-cell>
                      <s-table-cell>{p.reviews}</s-table-cell>
                      <s-table-cell>{p.source}</s-table-cell>
                    </s-table-row>
                  ))}
                </s-table-body>
              </s-table>
            </s-section>
          )}

          {/* Recommendations - DATA BACKED */}
          <s-section heading="Recommendations">
            {a.labels.verdict === "GO" && (
              <s-banner tone="success">
                <s-heading>Market Entry Viable</s-heading>
                <s-unordered-list>
                  <s-list-item>Target entry price: {a.pricing.currency}{a.pricing.suggestedEntry} (25th percentile - undercuts {Math.round((1 - a.pricing.suggestedEntry / a.pricing.avg) * 100)}% of market avg)</s-list-item>
                  <s-list-item>Competition level {a.labels.competitionLevel}: {a.competition.uniqueSellers} sellers, top 3 control {a.competition.top3Concentration}%</s-list-item>
                  <s-list-item>Review target: {Math.round(a.competition.reviewBarrier * 0.5)} reviews to reach 50% of top competitor trust</s-list-item>
                  {a.demand.buyerQuestions.length > 0 && (
                    <s-list-item>Address buyer question ;{a.demand.buyerQuestions[0].question}; in product listing</s-list-item>
                  )}
                </s-unordered-list>
              </s-banner>
            )}
            {a.labels.verdict === "CAUTION" && (
              <s-banner tone="warning">
                <s-heading>Proceed with Testing</s-heading>
                <s-unordered-list>
                  <s-list-item>Test with {a.pricing.currency}50-100 ad spend before inventory commitment</s-list-item>
                  <s-list-item>Price dispersion {a.pricing.priceDispersion < 0.3 ? "low" : "moderate"} ({(a.pricing.priceDispersion * 100).toFixed(0)}%) - {a.pricing.priceDispersion < 0.3 ? "tight margins expected" : "room for positioning"}</s-list-item>
                  {a.competition.marketplaceDominance > 50 && (
                    <s-list-item>Marketplaces control {a.competition.marketplaceDominance}% - differentiate on branding/service</s-list-item>
                  )}
                  {a.opportunities.nicheAngles.length > 0 && (
                    <s-list-item>Consider niche pivot: ;{a.opportunities.nicheAngles[0]};</s-list-item>
                  )}
                </s-unordered-list>
              </s-banner>
            )}
            {a.labels.verdict === "KILL" && (
              <s-banner tone="critical">
                <s-heading>Not Recommended</s-heading>
                <s-unordered-list>
                  {a.risks.killConditions.map((k, i) => (
                    <s-list-item key={i}>{k}</s-list-item>
                  ))}
                  {a.opportunities.nicheAngles.length > 0 && (
                    <s-list-item>Alternative: Explore ;{a.opportunities.nicheAngles[0]}; instead</s-list-item>
                  )}
                </s-unordered-list>
              </s-banner>
            )}
          </s-section>
        </>
      )}
    </s-page>
  );
}
