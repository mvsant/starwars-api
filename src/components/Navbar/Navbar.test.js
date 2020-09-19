import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./index";
import React from "react";

test("renders navigation Links", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const navHome = getByText("People");

  expect(navHome).toBeInTheDocument();
});
