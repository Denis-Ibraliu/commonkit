import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { If } from "./if";

describe("If", () => {
  it("renders children when condition is true", () => {
    render(<If condition>Visible content</If>);

    expect(screen.getByText("Visible content")).toBeTruthy();
  });

  it("renders nothing when condition is false", () => {
    const { container } = render(<If condition={false}>Hidden content</If>);

    expect(screen.queryByText("Hidden content")).toBeNull();
    expect(container.childElementCount).toBe(0);
  });
});
