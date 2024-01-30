import { render, screen } from "@testing-library/react";
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
});
