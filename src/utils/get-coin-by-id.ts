/**
 * Fetches single Cryptocurrency information based on id
 * @param {string} coinId - The Id of the Cryptocurrency.
 * @param {func} setCoinData - function to set the data retrieved in table component.
 */
export const getCoinById = async (
  coinId: string,
  setCoinData: any
): Promise<any> => {
  try {
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((response) => response.json())
      .then((res) => setCoinData(res));

    return data;
  } catch {
    return [];
  }
};
