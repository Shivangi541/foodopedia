import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//grouping of test cases by describe()
// it is also used to create test cases
describe("contact page tase cases", () => {
  test("Contact component renders correctly", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { name: /Contact/i });
    expect(heading).toBeInTheDocument();
  });

  test("should load button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /Send Message/i }); // querying
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Send Message");
    expect(button).toHaveClass("submit-btn");
  });
});
