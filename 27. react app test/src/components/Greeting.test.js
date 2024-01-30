import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Test Suite", () => {
  test("Hello World Text test", () => {
    // Arrange
    render(<Greeting />);
    // Act

    // Assert
    const target = screen.getByText("Hello World");
    expect(target).toBeInTheDocument();
  });

  test("Before Change Text", () => {
    // Arrange
    render(<Greeting />);

    // not perfectly corret option add
    const target = screen.getByText("Nice to meet", { exact: false });
    expect(target).toBeInTheDocument();
  });

  test("After Change Text", () => {
    // Arrange
    render(<Greeting />);
    const button = screen.getByRole("button");

    // Act
    userEvent.click(button);

    // Assert
    const target = screen.getByText("Good Bye");
    expect(target).toBeInTheDocument();
  });
});
