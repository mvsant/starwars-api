import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders greetings", () => {
  const { getByText } = render(<App />);
  const greetings = getByText("Welcome to Stars Wars API!");
  expect(greetings).toBeInTheDocument();
});
