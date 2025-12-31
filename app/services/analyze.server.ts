import { searchGoogle, searchShopping } from "./serper.server";
import { analyzeNiche, NicheAnalysis } from "./nicheAnalysis.server";

interface AnalyzeResult {
  raw: {
    keyword: string;
    country: string;
    search: unknown;
    shopping: unknown;
  };
  analysis: NicheAnalysis;
}

export async function analyzeKeyword(
  keyword: string,
  country: string
): Promise<AnalyzeResult> {
  const [search, shopping] = await Promise.all([
    searchGoogle(keyword, country),
    searchShopping(keyword, country),
  ]);

  const rawData = {
    keyword,
    country,
    search,
    shopping,
  };

  const analysis = analyzeNiche(rawData);

  return {
    raw: rawData,
    analysis,
  };
}
