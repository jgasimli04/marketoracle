/**
 * NewsData.io API Service
 * Full implementation with all endpoint support
 * Author: Javad Gasimli
 */

const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY!;
const NEWSDATA_BASE_URL = "https://newsdata.io/api/1";

// ================================================
// TYPE DEFINITIONS
// ================================================

/**
 * Common parameters shared across all endpoints
 */
interface NewsDataBaseParams {
  q?: string;                    // Keyword search in full article
  qInTitle?: string;             // Search only in title
  qInMeta?: string;              // Search in URL, meta description, title
  country?: string;              // Comma-separated ISO codes: "us,gb,de"
  excludecountry?: string;       // Countries to exclude
  language?: string;             // Comma-separated: "en,de,fr"
  excludelanguage?: string;      // Languages to exclude
  category?: string;             // business,entertainment,environment,food,health,politics,science,sports,technology,top,tourism,world
  excludecategory?: string;      // Categories to exclude
  domain?: string;               // Specific domains: "bbc,cnn,reuters"
  excludedomain?: string;        // Domains to exclude
  domainurl?: string;            // Full domain URLs
  prioritydomain?: 'top' | 'medium' | 'low'; // Source quality filter
  timezone?: string;             // IANA timezone: "America/New_York"
  full_content?: 0 | 1;          // Include full article text
  image?: 0 | 1;                 // Only articles with images
  video?: 0 | 1;                 // Only articles with video
  removeduplicate?: 0 | 1;       // Deduplicate results
  size?: number;                 // Results per page (max 50 paid, 10 free)
  page?: string;                 // Pagination token
}

/**
 * Latest endpoint specific parameters
 */
interface NewsDataLatestParams extends NewsDataBaseParams {
  timeframe?: number | string;   // Hours (1-48) or minutes (e.g., "104m")
  sentiment?: 'positive' | 'neutral' | 'negative';
  tag?: string;                  // AI tags: "banking,economy,realestate"
  region?: string;               // Geographic regions
}

/**
 * Archive endpoint specific parameters
 */
interface NewsDataArchiveParams extends NewsDataBaseParams {
  from_date: string;             // Required: YYYY-MM-DD or YYYY-MM-DD HH:mm:ss
  to_date: string;               // Required: YYYY-MM-DD or YYYY-MM-DD HH:mm:ss
}

/**
 * Market endpoint specific parameters
 */
interface NewsDataMarketParams extends NewsDataBaseParams {
  symbol?: string;               // Stock symbols: "AAPL,GOOGL,AMZN"
  timeframe?: number | string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  tag?: string;
  from_date?: string;
  to_date?: string;
}

/**
 * Article structure returned by all endpoints
 */
export interface NewsDataArticle {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  description: string | null;
  content: string | null;
  pubDate: string;
  pubDateTZ: string;
  image_url: string | null;
  video_url: string | null;
  source_id: string;
  source_name: string;
  source_url: string;
  source_icon: string | null;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
  ai_tag: string[] | null;
  ai_region: string | null;
  ai_org: string | null;
  sentiment: 'positive' | 'neutral' | 'negative' | null;
  sentiment_stats: {
    positive: number;
    neutral: number;
    negative: number;
  } | null;
  duplicate: boolean;
}

/**
 * Standard API response
 */
export interface NewsDataResponse {
  status: 'success' | 'error';
  totalResults: number;
  results: NewsDataArticle[];
  nextPage?: string;
}

/**
 * Source information (from /sources endpoint)
 */
export interface NewsDataSource {
  id: string;
  name: string;
  url: string;
  icon: string | null;
  priority: number;
  description: string | null;
  category: string[];
  language: string[];
  country: string[];
  last_fetch: string;
}

// ================================================
// CORE API FUNCTIONS
// ================================================

/**
 * Generic fetch wrapper with error handling
 */
async function fetchNewsData<T>(
  endpoint: string,
  params: Record<string, any>
): Promise<T> {
  const url = new URL(`${NEWSDATA_BASE_URL}/${endpoint}`);
  url.searchParams.append('apikey', NEWSDATA_API_KEY);

  // Add all non-null/undefined parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, String(value));
    }
  });

  const response = await fetch(url.toString(), {
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok || data.status === 'error') {
    throw new NewsDataError(
      data.results?.message || `NewsData API error: ${response.status}`,
      data.results?.code || 'UNKNOWN_ERROR',
      response.status
    );
  }

  return data;
}

/**
 * Custom error class for NewsData API errors
 */
export class NewsDataError extends Error {
  constructor(
    message: string,
    public code: string,
    public httpStatus: number
  ) {
    super(message);
    this.name = 'NewsDataError';
  }
}

// ================================================
// ENDPOINT IMPLEMENTATIONS
// ================================================

/**
 * Fetch latest news (past 48 hours)
 * Free: 12-hour delay, 10 results/request
 * Paid: Real-time, 50 results/request
 */
export async function fetchLatestNews(
  params: NewsDataLatestParams = {}
): Promise<NewsDataResponse> {
  return fetchNewsData<NewsDataResponse>('latest', params);
}

/**
 * Fetch historical news (archive)
 * Requires from_date and to_date
 */
export async function fetchArchiveNews(
  params: NewsDataArchiveParams
): Promise<NewsDataResponse> {
  if (!params.from_date || !params.to_date) {
    throw new Error('Archive endpoint requires from_date and to_date');
  }
  return fetchNewsData<NewsDataResponse>('archive', params);
}

/**
 * Fetch market/financial news
 * Includes stock symbol support
 */
export async function fetchMarketNews(
  params: NewsDataMarketParams = {}
): Promise<NewsDataResponse> {
  return fetchNewsData<NewsDataResponse>('market', params);
}

/**
 * Fetch cryptocurrency news
 */
export async function fetchCryptoNews(
  params: NewsDataLatestParams & { coin?: string } = {}
): Promise<NewsDataResponse> {
  return fetchNewsData<NewsDataResponse>('crypto', params);
}

/**
 * Fetch news sources
 */
export async function fetchSources(
  params: {
    country?: string;
    category?: string;
    language?: string;
    prioritydomain?: 'top' | 'medium' | 'low';
  } = {}
): Promise<{ status: string; results: NewsDataSource[] }> {
  return fetchNewsData('sources', params);
}

// ================================================
// ANALYSIS FUNCTIONS
// ================================================

/**
 * Aggregate sentiment for a keyword across multiple articles
 */
export interface SentimentAggregation {
  keyword: string;
  timeframe: string;
  sentimentScore: number;        // -1 (negative) to +1 (positive)
  positiveCount: number;
  neutralCount: number;
  negativeCount: number;
  totalArticles: number;
  uniqueSources: number;
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
  topPositiveHeadlines: string[];
  topNegativeHeadlines: string[];
  sampleArticles: NewsDataArticle[];
}

export async function aggregateSentiment(
  keyword: string,
  options: {
    countries?: string[];
    timeframeHours?: number;
    language?: string;
    includeFullContent?: boolean;
  } = {}
): Promise<SentimentAggregation> {
  const {
    countries = ['us', 'gb'],
    timeframeHours = 24,
    language = 'en',
    includeFullContent = false
  } = options;

  const results = await fetchLatestNews({
    q: keyword,
    country: countries.join(','),
    timeframe: timeframeHours,
    language,
    removeduplicate: 1,
    full_content: includeFullContent ? 1 : 0,
    size: 50,
  });

  const articles = results.results || [];

  let positive = 0, neutral = 0, negative = 0;
  const sources = new Set<string>();
  const positiveHeadlines: string[] = [];
  const negativeHeadlines: string[] = [];

  articles.forEach(article => {
    sources.add(article.source_id);

    switch (article.sentiment) {
      case 'positive':
        positive++;
        if (positiveHeadlines.length < 3) positiveHeadlines.push(article.title);
        break;
      case 'negative':
        negative++;
        if (negativeHeadlines.length < 3) negativeHeadlines.push(article.title);
        break;
      default:
        neutral++;
    }
  });

  const total = positive + neutral + negative;

  // Sentiment score formula: (positive - negative) / total
  // Ranges from -1 (all negative) to +1 (all positive)
  const sentimentScore = total > 0
    ? Math.round(((positive - negative) / total) * 1000) / 1000
    : 0;

  // Confidence based on sample size and source diversity
  let confidence: 'HIGH' | 'MEDIUM' | 'LOW';
  if (total >= 20 && sources.size >= 5) confidence = 'HIGH';
  else if (total >= 10 && sources.size >= 3) confidence = 'MEDIUM';
  else confidence = 'LOW';

  return {
    keyword,
    timeframe: `${timeframeHours} hours`,
    sentimentScore,
    positiveCount: positive,
    neutralCount: neutral,
    negativeCount: negative,
    totalArticles: total,
    uniqueSources: sources.size,
    confidence,
    topPositiveHeadlines: positiveHeadlines,
    topNegativeHeadlines: negativeHeadlines,
    sampleArticles: articles.slice(0, 5),
  };
}

/**
 * Monitor for tariff/regulatory news
 */
export interface RegulatoryAlert {
  title: string;
  description: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  source: string;
  publishedAt: string;
  url: string;
  sentiment: string | null;
  affectedRegions: string[];
  keywords: string[];
}

export async function monitorRegulatoryNews(
  options: {
    targetCountries?: string[];
    customKeywords?: string[];
    timeframeHours?: number;
  } = {}
): Promise<RegulatoryAlert[]> {
  const {
    targetCountries = ['us', 'cn', 'eu'],
    customKeywords = [],
    timeframeHours = 24
  } = options;

  const baseKeywords = [
    'tariff',
    'import duty',
    'trade war',
    'de minimis',
    'customs regulation',
    'import tax',
    'trade policy',
    'export control',
    'sanctions',
    'trade agreement'
  ];

  const allKeywords = [...baseKeywords, ...customKeywords];

  const results = await fetchLatestNews({
    q: allKeywords.join(' OR '),
    country: targetCountries.join(','),
    category: 'business,politics',
    timeframe: timeframeHours,
    language: 'en',
    prioritydomain: 'top',
    removeduplicate: 1,
    size: 50,
  });

  return (results.results || []).map(article => {
    // Determine severity based on sentiment and keywords
    let severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'MEDIUM';

    const text = `${article.title} ${article.description || ''}`.toLowerCase();

    if (text.includes('immediately') || text.includes('emergency') || text.includes('suspend')) {
      severity = 'CRITICAL';
    } else if (article.sentiment === 'negative') {
      severity = 'HIGH';
    } else if (article.sentiment === 'positive') {
      severity = 'LOW';
    }

    // Extract matched keywords
    const matchedKeywords = allKeywords.filter(kw =>
      text.includes(kw.toLowerCase())
    );

    return {
      title: article.title,
      description: article.description || '',
      severity,
      source: article.source_name,
      publishedAt: article.pubDate,
      url: article.link,
      sentiment: article.sentiment,
      affectedRegions: article.country,
      keywords: matchedKeywords,
    };
  }).sort((a, b) => {
    // Sort by severity
    const severityOrder = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });
}

/**
 * Track news volume over time for trend detection
 */
export async function trackNewsVolume(
  keyword: string,
  options: {
    daysBack?: number;
    country?: string;
  } = {}
): Promise<{
  keyword: string;
  dailyVolume: Array<{ date: string; count: number; sentiment: number }>;
  trend: 'INCREASING' | 'STABLE' | 'DECREASING';
  averageDaily: number;
}> {
  const { daysBack = 7, country = 'us' } = options;

  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - daysBack);

  // Note: Archive endpoint required for historical data
  const results = await fetchArchiveNews({
    q: keyword,
    country,
    from_date: startDate.toISOString().split('T')[0],
    to_date: today.toISOString().split('T')[0],
    language: 'en',
    removeduplicate: 1,
    size: 50,
  });

  // Group by date
  const dailyData = new Map<string, { count: number; sentimentSum: number }>();

  for (let i = 0; i < daysBack; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    dailyData.set(dateStr, { count: 0, sentimentSum: 0 });
  }

  (results.results || []).forEach(article => {
    const dateStr = article.pubDate.split(' ')[0];
    const existing = dailyData.get(dateStr);
    if (existing) {
      existing.count++;
      if (article.sentiment === 'positive') existing.sentimentSum += 1;
      else if (article.sentiment === 'negative') existing.sentimentSum -= 1;
    }
  });

  const dailyVolume = Array.from(dailyData.entries())
    .map(([date, data]) => ({
      date,
      count: data.count,
      sentiment: data.count > 0 ? data.sentimentSum / data.count : 0,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  // Calculate trend
  const recentAvg = dailyVolume.slice(-3).reduce((sum, d) => sum + d.count, 0) / 3;
  const olderAvg = dailyVolume.slice(0, 3).reduce((sum, d) => sum + d.count, 0) / 3;

  let trend: 'INCREASING' | 'STABLE' | 'DECREASING';
  if (recentAvg > olderAvg * 1.2) trend = 'INCREASING';
  else if (recentAvg < olderAvg * 0.8) trend = 'DECREASING';
  else trend = 'STABLE';

  const averageDaily = dailyVolume.reduce((sum, d) => sum + d.count, 0) / dailyVolume.length;

  return {
    keyword,
    dailyVolume,
    trend,
    averageDaily: Math.round(averageDaily * 10) / 10,
  };
}

// ================================================
// UTILITY FUNCTIONS
// ================================================

/**
 * Paginate through all results
 */
export async function* paginateResults(
  fetchFn: (page?: string) => Promise<NewsDataResponse>,
  maxPages: number = 5
): AsyncGenerator<NewsDataArticle[], void, unknown> {
  let nextPage: string | undefined;
  let pageCount = 0;

  do {
    const response = await fetchFn(nextPage);
    yield response.results;

    nextPage = response.nextPage;
    pageCount++;
  } while (nextPage && pageCount < maxPages);
}

/**
 * Rate limiter for API calls
 */
export class RateLimiter {
  private tokens: number;
  private lastRefill: number;
  private readonly maxTokens: number;
  private readonly refillRate: number; // tokens per second

  constructor(maxTokens: number = 10, refillRate: number = 1) {
    this.maxTokens = maxTokens;
    this.tokens = maxTokens;
    this.refillRate = refillRate;
    this.lastRefill = Date.now();
  }

  async acquire(): Promise<void> {
    this.refill();

    if (this.tokens <= 0) {
      const waitTime = (1 / this.refillRate) * 1000;
      await new Promise(resolve => setTimeout(resolve, waitTime));
      this.refill();
    }

    this.tokens--;
  }

  private refill(): void {
    const now = Date.now();
    const elapsed = (now - this.lastRefill) / 1000;
    this.tokens = Math.min(this.maxTokens, this.tokens + elapsed * this.refillRate);
    this.lastRefill = now;
  }
}

// Export singleton rate limiter
export const newsDataRateLimiter = new RateLimiter(10, 1);

// Export types for external use
export type {
  NewsDataBaseParams,
  NewsDataLatestParams,
  NewsDataArchiveParams,
  NewsDataMarketParams,
};
