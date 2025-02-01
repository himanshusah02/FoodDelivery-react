import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/AppStore1";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


// const loginButton = screen.getByRole("button");
const loginButton = screen.getByRole("button", {name: "Login"});

expect(loginButton).toBeInTheDocument();
});

it("should load Header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
  
  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", {name: "Login"});

  fireEvent.click(loginButton);

  const logOutButton = screen.getByRole("button", {name: "Logout"});
  
  expect(logOutButton).toBeInTheDocument();
  });