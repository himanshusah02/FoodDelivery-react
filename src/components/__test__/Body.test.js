import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with the search button ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const serchInput = screen.getByTestId("searchInput");

  fireEvent.change(serchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});
