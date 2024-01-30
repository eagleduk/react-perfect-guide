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

    // Assert
    // not perfectly corret option add
    const target = screen.getByText("Nice to meet", { exact: false });
    expect(target).toBeInTheDocument();
  });

  test("After Change Text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    const target = screen.getByText("Good Bye");
    expect(target).toBeInTheDocument();
  });

  test("not display 'Nice to meet you' when button clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    // const target = screen.getByText("Nice to meet", { exact: false });
    // expect(target).not.toBeInTheDocument();
    const target = screen.queryByText("Nice to meet", { exact: false });
    expect(target).toBeNull();
  });
});
