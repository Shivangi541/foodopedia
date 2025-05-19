import { fireEvent, screen, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import AppStore from "../../utils/AppStore";
import "@testing-library/jest-dom";

describe("Header component test cases", () => {
  //   test("Header compnent should load properly", () => {
  //     render(
  //       <BrowserRouter>
  //         <Provider store={AppStore}>
  //           <Header />
  //         </Provider>
  //       </BrowserRouter>
  //     );
  //     const logo = screen.getByRole("img");
  //     const heading = screen.getByRole("heading");
  //     expect(logo).toBeInTheDocument();
  //     expect(heading).toBeInTheDocument();
  //     //  expect(logo).toHaveAttribute("src", "https://www.edureka.co/assets/images/logo.png");
  //   });
  test("should load login button", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: /Login/i }); // querying
    expect(button).toBeInTheDocument();
  });

  it("should change click freature of login button", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginbutton = screen.getByRole("button", { name: /Login/i });
    expect(loginbutton).toBeInTheDocument();
    fireEvent.click(loginbutton);
    const logoutbutton = screen.getByRole("button", { name: /Logout/i });
    expect(logoutbutton).toHaveTextContent("Logout");
  });
});
