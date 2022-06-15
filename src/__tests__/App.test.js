import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Header tests", () => {
  //makes sure that the app always has this specific text as the heading
  //can use "test" or "it"
  it("should find the header text", () => {
    //the file that's being tested
    render(<App />);
    //query methods being used
    const headerElement = screen.getByText(/My Calculator/i);
    //assertions
    expect(headerElement).toBeInTheDocument();
  });


  it("should find the element of the header", () => {
    render(<App />);
    //searching for just "heading" isn't specific enough as there are multiple h1/h2 tags etc. so specify the name as needed
    const headingElement = screen.getByRole("heading", {
      name: "My Calculator",
    });
    expect(headingElement).toBeInTheDocument();
  });


  it("should have a h1 tag as the main header element", () => {
    render(<App />);
    const headingElementType = screen.getByText(/My Calculator/i);
    expect(headingElementType).toContainHTML("h1");
  });
});

describe("Calculator tests", () => {
  it("should display 4 when the user enters 2+2", () => {
    render(<App />);
    const twoButton = screen.getByText("2");
    const plusButton = screen.getByText("+");
    const equalsButton = screen.getByText("=");

    fireEvent.click(twoButton);
    fireEvent.click(plusButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);

    const display = screen.getByTestId("display");
    expect(display).toHaveTextContent("4");
  });


  it("should display 3 when user enters 6/2", () => {
    render(<App />);
    const sixButton = screen.getByText("6");
    const twoButton = screen.getByText("2");
    const divideButton = screen.getByText("/");
    const equalsButton = screen.getByText("=");

    fireEvent.click(sixButton);
    fireEvent.click(divideButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);

    const display = screen.getByTestId("display");
    expect(display).toHaveTextContent("3");
  });


  it("should display 15 when user enters 5*3", () => {
    render(<App />);
    const fiveButton = screen.getByText("5");
    const threeButton = screen.getByText("3");
    const timesButton = screen.getByText("*");
    const equalsButton = screen.getByText("=");

    fireEvent.click(fiveButton);
    fireEvent.click(timesButton);
    fireEvent.click(threeButton);
    fireEvent.click(equalsButton);

    const display = screen.getByTestId("display");
    expect(display).toHaveTextContent("15");
  });
});
