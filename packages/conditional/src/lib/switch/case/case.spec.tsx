import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Case } from "./case";

describe("Case", () => {
  it("renders children when condition is true", () => {
    render(<Case condition>Case content</Case>);

    expect(screen.getByText("Case content")).toBeTruthy();
  });

  it("renders nothing when condition is false", () => {
    const { container } = render(<Case condition={false}>Case content</Case>);

    expect(screen.queryByText("Case content")).toBeNull();
    expect(container.childElementCount).toBe(0);
  });
});
