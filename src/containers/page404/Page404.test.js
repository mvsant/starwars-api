import React from "react";
import { render } from "@testing-library/react";
import Page404 from "./index";

test("renders not found message", () => {
  const { getByText } = render(<Page404 />);
  const greetings = getByText("Page not found");
  expect(greetings).toBeInTheDocument();
});
