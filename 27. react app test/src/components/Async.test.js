import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Test", () => {
  test("Http fetch Test", async () => {
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
