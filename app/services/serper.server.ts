const SERPER_API_KEY = process.env.SERPER_API_KEY!;

export async function searchGoogle(keyword: string, country: string) {
  const response = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": SERPER_API_KEY,
    },
    body: JSON.stringify({
      q: keyword,
      gl: country,
    }),
  });

  if (!response.ok) {
    throw new Error(`Serper search failed: ${response.status}`);
  }

  return response.json();
}

export async function searchShopping(keyword: string, country: string) {
  const response = await fetch("https://google.serper.dev/shopping", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": SERPER_API_KEY,
    },
    body: JSON.stringify({
      q: keyword,
      gl: country,
      num: 40,
    }),
  });

  if (!response.ok) {
    throw new Error(`Serper shopping failed: ${response.status}`);
  }

  return response.json();
}
