import React, { useEffect, useState } from "react";

import { getCoins } from "../../utils/get-coins";
import { CoinsTable } from "../../components/CoinsTable";

import "./styles.css";

export const CoinGeckoTablePage = () => {
  const [coins, setCoins] = useState<any>([]);

  useEffect(() => {
    getCoins(setCoins);
  }, []);

  return (
    <div className="container">
      <header className="app-header">Cryptocurrency Prices</header>
      <CoinsTable data={coins} />
    </div>
  );
};
