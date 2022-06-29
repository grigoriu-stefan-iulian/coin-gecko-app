import React, { useState } from "react";

import { Table, Thead, Tbody, Tr, Th, Td, Collapse } from "@chakra-ui/react";

import { getCoinById } from "../utils/get-coin-by-id";

export const CoinsTable = ({ data }: any) => {
  const [coinData, setCoinData] = useState<any>({});

  const handleOnRowClick = (id: string) => () => {
    if (coinData && coinData.id === id) {
      return setCoinData({});
    }

    setCoinData({});
    const coinInfo: any = getCoinById(id, setCoinData);

    return coinInfo;
  };

  return (
    <Table colorScheme="teal" variant="expanded">
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Name</Th>
          <Th>Symbol</Th>
          <Th>Current Price</Th>
          <Th>High 24 hour Price</Th>
          <Th>Low 24 hour Price</Th>
        </Tr>
      </Thead>

      <Tbody>
        {!!data.length &&
          data.map((item: any) => (
            <>
              <Tr
                key={item.id}
                className="table-row"
                onClick={handleOnRowClick(item.id)}
              >
                <Td>
                  <img className="coin-image" src={item.image} alt="item.id" />
                </Td>
                <Td>{item.name}</Td>
                <Td>{item.symbol}</Td>
                <Td>{item.current_price}</Td>
                <Td>{item.high_24h}</Td>
                <Td>{item.low_24h}</Td>
              </Tr>
              {!!Object.keys(coinData).length && coinData.id === item.id && (
                <Tr key={item.name}>
                  <Td>{""}</Td>
                  <Td>
                    <p className="coin-info-row">
                      <span className="coin-info-label">Name:</span>{" "}
                      {coinData.name}
                    </p>
                    <p className="coin-info-row">
                      <span className="coin-info-label">Symbol:</span>{" "}
                      {coinData.symbol}
                    </p>
                  </Td>
                  <Td>
                    <p className="coin-info-row">
                      <span className="coin-info-label">Homepage:</span>{" "}
                      {coinData.links?.homepage}
                    </p>
                    <p className="coin-info-row">
                      <span className="coin-info-label">
                        Hashing algorithm:
                      </span>{" "}
                      {coinData.hashing_algorithm}
                    </p>
                  </Td>
                  <Td>
                    <p className="coin-info-row">
                      <span className="coin-info-label">
                        Market cap in Euro:
                      </span>{" "}
                      {coinData.market_data?.market_cap?.eur?.toLocaleString(
                        "en",
                        {
                          useGrouping: true,
                        }
                      )}
                    </p>
                  </Td>
                  <Td>
                    <p className="coin-info-row coin-description">
                      <span className="coin-info-label">Description:</span>{" "}
                      {coinData.description?.en}
                    </p>
                  </Td>
                  <Td>
                    <p className="coin-info-row">
                      <span className="coin-info-label">Genesis Date:</span>{" "}
                      {coinData.genesis_date}
                    </p>
                  </Td>
                </Tr>
              )}
            </>
          ))}
      </Tbody>
    </Table>
  );
};
