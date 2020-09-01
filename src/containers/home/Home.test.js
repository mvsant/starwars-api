import React from "react";
import { render } from "@testing-library/react";
import Home from "./index";
import { BrowserRouter } from "react-router-dom";

test("renders  Home greetings", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const greetings = getByText(/Dive into/);
  expect(greetings).toBeInTheDocument();
});
