import React from "react";
import { render, screen } from "@testing-library/react";
import { CoinGecko } from "./CoinGecko";

test("renders learn react link", () => {
  render(<CoinGecko />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
