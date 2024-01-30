import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Test", () => {
  test("Http fetch Test", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "i1", title: "title" }],
    });
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
