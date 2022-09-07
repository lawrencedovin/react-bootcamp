import React from "react";
import { render } from "@testing-library/react";
import Dog from "./Dog";

it("matches snapshot of dog named Whiskey and adoption status to true", function() {
  const { asFragment } = render(<Dog name="Whiskey" isAdopted />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot of dog named Tubby", function() {
  const { asFragment } = render(<Dog name="Tubby" />);
  expect(asFragment()).toMatchSnapshot();
});