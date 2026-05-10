import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Default } from "./default";

describe("Default", () => {
  it("always renders its children", () => {
    render(<Default>Fallback content</Default>);

    expect(screen.getByText("Fallback content")).toBeTruthy();
  });
});
