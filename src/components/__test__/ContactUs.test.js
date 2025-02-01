// import { render } from "react-router-dom"
import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contactUs component ", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});


test("should load contactUs button component ", () => {
  render(<ContactUs />);
  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();

  
});
