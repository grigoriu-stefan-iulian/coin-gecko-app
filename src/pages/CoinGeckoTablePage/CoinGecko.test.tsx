import React from "react";
import { render, screen } from "@testing-library/react";
import { CoinGeckoTablePage } from "./CoinGeckoTablePage";

test("renders learn react link", () => {
  render(<CoinGeckoTablePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
