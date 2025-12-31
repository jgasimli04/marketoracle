/**
 * Niche Analysis Scoring Engine
 * Author: Javad Gasimli
 */

//types

interface SerperProduct {
  title: string;
  source: string;
  link: string;
  price?: string;
  rating?: number;
  ratingCount?: number;
  position: number;
}

interface SerperOrganic {
  title: string;
  link: string;
  snippet?: string;
  position: number;
}

interface SerperQuestion {
  question: string;
  snippet?: string;
}

interface SerperRelated {
  query: string;
}

interface SerperResponse {
  keyword: string;
  country: string;
  search?: {
    organic?: SerperOrganic[];
    peopleAlsoAsk?: SerperQuestion[];
    relatedSearches?: SerperRelated[];
    credits?: number;
  };
  shopping?: {
    shopping?: SerperProduct[];
    credits?: number;
  };
}

export interface NicheAnalysis {
  meta: {
    keyword: string;
    country: string;
    analyzedAt: string;
    signalCount: number;
    creditsUsed: number;
  };
  scores: {
    overall: number;
    opportunity: number;
    competition: number;
    demand: number;
    priceHealth: number;
  };
  labels: {
    verdict: "GO" | "CAUTION" | "KILL";
    verdictReason: string;
    competitionLevel: "LOW" | "MODERATE" | "HIGH" | "EXTREME";
    demandLevel: "LOW" | "MODERATE" | "HIGH";
    priceHealthLevel: "POOR" | "MODERATE" | "HEALTHY";
  };
  pricing: {
    min: number;
    max: number;
    avg: number;
    median: number;
    currency: string;
    distribution: {
      under25: number;
      tier25to50: number;
      tier50to100: number;
      over100: number;
    };
    priceDispersion: number;
    suggestedEntry: number;
  };
  competition: {
    totalSellers: number;
    uniqueSellers: number;
    marketplaceDominance: number;
    top3Concentration: number;
    topSellers: { name: string; count: number; share: number }[];
    reviewBarrier: number;
    bigPlayerPresence: string[];
  };
  demand: {
    relatedKeywords: string[];
    keywordCount: number;
    buyerQuestions: { question: string; snippet?: string }[];
    questionCount: number;
    searchResultCount: number;
    demandSignals: string[];
  };
  opportunities: {
    nicheAngles: string[];
    contentAngles: string[];
    adCopyHooks: string[];
    underservedNiches: string[];
  };
  risks: {
    warnings: string[];
    killConditions: string[];
  };
  actions: {
    nextSteps: string[];
    goConditions: string[];
  };
  topProducts: {
    title: string;
    price: string;
    rating?: number;
    reviews?: number;
    source: string;
  }[];
}

//helpers

const BIG_PLAYERS = ["amazon", "ebay", "walmart", "target", "aliexpress", "etsy", "wayfair", "costco", "bestbuy"];

function parsePrice(priceStr?: string): number {
  if (!priceStr) return 0;
  const cleaned = priceStr.replace(/[€$£¥₹,\s]/g, "");
  const normalized = cleaned.replace(",", ".");
  const num = parseFloat(normalized);
  return isNaN(num) ? 0 : num;
}

function detectCurrency(products: SerperProduct[]): string {
  const firstPrice = products.find((p) => p.price)?.price || "";
  if (firstPrice.includes("€")) return "€";
  if (firstPrice.includes("£")) return "£";
  return "$";
}

function median(arr: number[]): number {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function standardDeviation(arr: number[]): number {
  if (arr.length === 0) return 0;
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  const squareDiffs = arr.map((value) => Math.pow(value - avg, 2));
  return Math.sqrt(squareDiffs.reduce((a, b) => a + b, 0) / arr.length);
}

function isBigPlayer(source: string): boolean {
  const normalized = source.toLowerCase();
  return BIG_PLAYERS.some((player) => normalized.includes(player));
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

//perculators

function calculateCompetitionScore(
  uniqueSellers: number,
  marketplaceDominance: number,
  top3Concentration: number,
  reviewBarrier: number
): number {
  let score = 100;

  // More sellers = more competition
  if (uniqueSellers <= 5) score -= 0;
  else if (uniqueSellers <= 15) score -= 20;
  else if (uniqueSellers <= 30) score -= 40;
  else score -= 60;

  // Amazon/eBay/Walmart dominance = hard to compete
  score -= marketplaceDominance * 0.3;

  // Top 3 control market = oligopoly
  if (top3Concentration > 70) score -= 20;
  else if (top3Concentration > 50) score -= 10;

  // Need lots of reviews to compete = barrier
  if (reviewBarrier > 500) score -= 20;
  else if (reviewBarrier > 200) score -= 10;
  else if (reviewBarrier > 50) score -= 5;

  return clamp(score, 0, 100);
}

function calculateDemandScore(
  relatedKeywords: number,
  questions: number,
  organicResults: number
): number {
  let score = 0;

  // More keyword variations = more search interest
  score += Math.min(relatedKeywords * 8, 40);

  // Questions = active buyer research
  score += Math.min(questions * 15, 30);

  // Full SERP = established category
  if (organicResults >= 10) score += 20;
  else if (organicResults >= 5) score += 10;

  // Bonus for strong signals
  if (relatedKeywords >= 5 && questions >= 2) score += 10;

  return clamp(score, 0, 100);
}

function calculatePriceHealthScore(prices: number[], priceDispersion: number): number {
  if (prices.length === 0) return 0;

  let score = 50;
  const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
  const min = Math.min(...prices);

  // High dispersion = pricing freedom
  if (priceDispersion > 0.5) score += 25;
  else if (priceDispersion > 0.3) score += 15;
  else if (priceDispersion > 0.15) score += 5;
  else score -= 10; // Tight = race to bottom

  // Big gap between min and avg = price floor risk
  const floorRisk = (avg - min) / avg;
  if (floorRisk > 0.7) score -= 20;
  else if (floorRisk > 0.5) score -= 10;

  // Low avg price = thin margins
  if (avg < 15) score -= 15;
  else if (avg < 25) score -= 5;
  else if (avg > 50) score += 10;

  return clamp(score, 0, 100);
}

function calculateOpportunityScore(
  competitionScore: number,
  demandScore: number,
  priceHealthScore: number
): number {
  // High demand + LOW competition + healthy pricing = opportunity
  const competitionInverted = 100 - competitionScore;

  const weighted =
    demandScore * 0.35 +
    competitionInverted * 0.4 +
    priceHealthScore * 0.25;

  return clamp(Math.round(weighted), 0, 100);
}

function getVerdict(
  overall: number,
  competition: number,
  demand: number
): { verdict: "GO" | "CAUTION" | "KILL"; reason: string } {

  // Kill conditions
  if (competition >= 85 && demand < 40) {
    return { verdict: "KILL", reason: "Extreme competition with weak demand" };
  }
  if (competition >= 90) {
    return { verdict: "KILL", reason: "Market dominated by big players" };
  }

  // Go conditions
  if (overall >= 65 && competition < 50 && demand >= 50) {
    return { verdict: "GO", reason: "Strong opportunity with manageable competition" };
  }
  if (overall >= 70 && demand >= 60) {
    return { verdict: "GO", reason: "High demand justifies entry" };
  }

  // Caution otherwise
  if (competition >= 60) {
    return { verdict: "CAUTION", reason: "High competition - need differentiation" };
  }
  if (demand < 30) {
    return { verdict: "CAUTION", reason: "Low demand signals - validate before investing" };
  }

  return { verdict: "CAUTION", reason: "Mixed signals - test with small inventory" };
}

//main

export function analyzeNiche(data: SerperResponse): NicheAnalysis {
  const products = data.shopping?.shopping || [];
  const organic = data.search?.organic || [];
  const questions = data.search?.peopleAlsoAsk || [];
  const relatedSearches = data.search?.relatedSearches || [];

  // Parse prices
  const prices = products.map((p) => parsePrice(p.price)).filter((p) => p > 0);
  const currency = detectCurrency(products);

  // Price stats
  const priceMin = prices.length ? Math.min(...prices) : 0;
  const priceMax = prices.length ? Math.max(...prices) : 0;
  const priceAvg = prices.length ? prices.reduce((a, b) => a + b, 0) / prices.length : 0;
  const priceMedian = median(prices);
  const priceStdDev = standardDeviation(prices);
  const priceDispersion = priceAvg > 0 ? priceStdDev / priceAvg : 0;

  // Competition analysis
  const sourceCount: Record<string, number> = {};
  products.forEach((p) => {
    const source = p.source.split(" - ")[0].trim();
    sourceCount[source] = (sourceCount[source] || 0) + 1;
  });

  const uniqueSellers = Object.keys(sourceCount).length;
  const sortedSources = Object.entries(sourceCount).sort((a, b) => b[1] - a[1]);

  const top3Count = sortedSources.slice(0, 3).reduce((sum, [, count]) => sum + count, 0);
  const top3Concentration = products.length > 0 ? (top3Count / products.length) * 100 : 0;

  const bigPlayerCount = products.filter((p) => isBigPlayer(p.source)).length;
  const marketplaceDominance = products.length > 0 ? (bigPlayerCount / products.length) * 100 : 0;

  const bigPlayersPresent = [...new Set(
    products.filter((p) => isBigPlayer(p.source)).map((p) => p.source.split(" - ")[0].trim().toLowerCase())
  )];

  // Review barrier
  const topByReviews = [...products]
    .filter((p) => p.ratingCount)
    .sort((a, b) => (b.ratingCount || 0) - (a.ratingCount || 0))
    .slice(0, 5);
  const reviewBarrier = topByReviews.length > 0
    ? topByReviews.reduce((sum, p) => sum + (p.ratingCount || 0), 0) / topByReviews.length
    : 0;

  // Calculate scores
  const competitionScore = calculateCompetitionScore(uniqueSellers, marketplaceDominance, top3Concentration, reviewBarrier);
  const demandScore = calculateDemandScore(relatedSearches.length, questions.length, organic.length);
  const priceHealthScore = calculatePriceHealthScore(prices, priceDispersion);
  const opportunityScore = calculateOpportunityScore(competitionScore, demandScore, priceHealthScore);
  const overallScore = Math.round(opportunityScore * 0.5 + demandScore * 0.25 + priceHealthScore * 0.25);

  const { verdict, reason } = getVerdict(overallScore, competitionScore, demandScore);

  // Build output
  return {
    meta: {
      keyword: data.keyword,
      country: data.country,
      analyzedAt: new Date().toISOString(),
      signalCount: products.length + organic.length,
      creditsUsed: (data.search?.credits || 0) + (data.shopping?.credits || 0),
    },
    scores: {
      overall: overallScore,
      opportunity: opportunityScore,
      competition: competitionScore,
      demand: demandScore,
      priceHealth: priceHealthScore,
    },
    labels: {
      verdict,
      verdictReason: reason,
      competitionLevel: competitionScore >= 80 ? "EXTREME" : competitionScore >= 60 ? "HIGH" : competitionScore >= 35 ? "MODERATE" : "LOW",
      demandLevel: demandScore >= 60 ? "HIGH" : demandScore >= 30 ? "MODERATE" : "LOW",
      priceHealthLevel: priceHealthScore >= 60 ? "HEALTHY" : priceHealthScore >= 35 ? "MODERATE" : "POOR",
    },
    pricing: {
      min: Math.round(priceMin * 100) / 100,
      max: Math.round(priceMax * 100) / 100,
      avg: Math.round(priceAvg * 100) / 100,
      median: Math.round(priceMedian * 100) / 100,
      currency,
      distribution: {
        under25: prices.filter((p) => p < 25).length,
        tier25to50: prices.filter((p) => p >= 25 && p < 50).length,
        tier50to100: prices.filter((p) => p >= 50 && p < 100).length,
        over100: prices.filter((p) => p >= 100).length,
      },
      priceDispersion: Math.round(priceDispersion * 100) / 100,
      suggestedEntry: Math.round(prices[Math.floor(prices.length * 0.25)] || priceAvg),
    },
    competition: {
      totalSellers: products.length,
      uniqueSellers,
      marketplaceDominance: Math.round(marketplaceDominance),
      top3Concentration: Math.round(top3Concentration),
      topSellers: sortedSources.slice(0, 5).map(([name, count]) => ({
        name,
        count,
        share: Math.round((count / products.length) * 100),
      })),
      reviewBarrier: Math.round(reviewBarrier),
      bigPlayerPresence: bigPlayersPresent,
    },
    demand: {
      relatedKeywords: relatedSearches.map((r) => r.query),
      keywordCount: relatedSearches.length,
      buyerQuestions: questions.map((q) => ({ question: q.question, snippet: q.snippet })),
      questionCount: questions.length,
      searchResultCount: organic.length,
      demandSignals: [
        relatedSearches.length >= 5 ? "Strong keyword variations" : null,
        questions.length >= 2 ? "Active buyer questions" : null,
        organic.length >= 10 ? "Full SERP coverage" : null,
      ].filter(Boolean) as string[],
    },
    opportunities: {
      nicheAngles: relatedSearches
        .map((r) => r.query)
        .filter((q) => /for |best |cheap |premium |custom |women|men|kids/i.test(q))
        .slice(0, 5),
      contentAngles: questions.map((q) => q.question),
      adCopyHooks: questions.map((q) => {
        if (q.question.toLowerCase().startsWith("what ")) return `Discover ${q.question.slice(5)}`;
        if (q.question.toLowerCase().startsWith("how ")) return `Learn ${q.question}`;
        return q.question;
      }).slice(0, 5),
      underservedNiches: relatedSearches
        .filter((r) => !products.some((p) => p.title.toLowerCase().includes(r.query.toLowerCase())))
        .map((r) => r.query)
        .slice(0, 3),
    },
    risks: {
      warnings: [
        marketplaceDominance > 60 ? `${Math.round(marketplaceDominance)}% market controlled by major marketplaces` : null,
        bigPlayersPresent.includes("amazon") ? "Amazon is actively selling in this niche" : null,
        top3Concentration > 70 ? "Top 3 sellers control over 70% of listings" : null,
        priceDispersion < 0.15 ? "Very tight price competition - race to bottom risk" : null,
        reviewBarrier > 300 ? `Top products average ${Math.round(reviewBarrier)}+ reviews - high trust barrier` : null,
      ].filter(Boolean) as string[],
      killConditions: [
        competitionScore >= 80 ? "Competition score above 80 - extremely saturated" : null,
        marketplaceDominance > 80 ? "Marketplaces control >80% - no room for independents" : null,
        priceHealthScore < 25 ? "Price health critical - margins likely unsustainable" : null,
      ].filter(Boolean) as string[],
    },
    actions: {
      nextSteps: verdict === "GO"
        ? ["Source products from 2-3 suppliers for testing", "Create landing page with top buyer questions addressed"]
        : verdict === "CAUTION"
        ? ["Run small test campaign ($50-100) before inventory", "Research differentiation opportunities"]
        : ["Consider pivoting to related niche", "Look for less competitive alternatives"],
      goConditions: [
        opportunityScore >= 60 ? "Opportunity score indicates viable entry" : null,
        demandScore >= 50 ? "Strong demand signals present" : null,
        questions.length >= 3 ? "Multiple buyer questions = active purchase intent" : null,
      ].filter(Boolean) as string[],
    },
    topProducts: [...products]
      .filter((p) => p.ratingCount)
      .sort((a, b) => (b.ratingCount || 0) - (a.ratingCount || 0))
      .slice(0, 5)
      .map((p) => ({
        title: p.title,
        price: p.price || "N/A",
        rating: p.rating,
        reviews: p.ratingCount,
        source: p.source,
      })),
  };
}
