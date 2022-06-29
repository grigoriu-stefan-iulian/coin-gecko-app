/**
 * Fetches first 10 Cryptocurrencies ordered by market_cap_desc
 * @param {func} setCoinData - function to set the data retrieved in the CoinGecko component.
 */
export const getCoins = async (setCoins: any): Promise<Array<string>> => {
  try {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((res) => setCoins(res));

    return data;
  } catch {
    return [];
  }
};
