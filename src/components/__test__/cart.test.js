import { act, fireEvent, render, screen } from "@testing-library/react";
import Restaurant from "../Restaurant";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/AppStore1";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load cart item ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Restaurant />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart -(1 items)")).toBeInTheDocument;
});
