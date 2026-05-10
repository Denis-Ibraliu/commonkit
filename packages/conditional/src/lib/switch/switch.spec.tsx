import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders the first matching case", () => {
    render(
      <Switch>
        <Switch.Case condition={false}>First case</Switch.Case>
        <Switch.Case condition>Second case</Switch.Case>
        <Switch.Case condition>Third case</Switch.Case>
        <Switch.Default>Fallback content</Switch.Default>
      </Switch>,
    );

    expect(screen.getByText("Second case")).toBeTruthy();
    expect(screen.queryByText("Third case")).toBeNull();
    expect(screen.queryByText("Fallback content")).toBeNull();
  });

  it("renders the default when no cases match", () => {
    render(
      <Switch>
        <Switch.Case condition={false}>First case</Switch.Case>
        <Switch.Case condition={false}>Second case</Switch.Case>
        <Switch.Default>Fallback content</Switch.Default>
      </Switch>,
    );

    expect(screen.getByText("Fallback content")).toBeTruthy();
  });

  it("throws when there is no case child", () => {
    expect(() =>
      render(
        <Switch>
          <Switch.Default>Fallback content</Switch.Default>
        </Switch>,
      ),
    ).toThrowError("Switch component requires at least one Switch.Case.");
  });

  it("throws when there is not exactly one default child", () => {
    expect(() =>
      render(
        <Switch>
          <Switch.Case condition>Case content</Switch.Case>
        </Switch>,
      ),
    ).toThrowError("Switch component requires exactly one Switch.Default.");

    expect(() =>
      render(
        <Switch>
          <Switch.Case condition>Case content</Switch.Case>
          <Switch.Default>Fallback one</Switch.Default>
          <Switch.Default>Fallback two</Switch.Default>
        </Switch>,
      ),
    ).toThrowError("Switch component requires exactly one Switch.Default.");
  });

  it("throws when a non-switch child is provided", () => {
    expect(() =>
      render(
        <Switch>
          <Switch.Case condition>Case content</Switch.Case>
          <p>Invalid child</p>
          <Switch.Default>Fallback content</Switch.Default>
        </Switch>,
      ),
    ).toThrowError(
      "Switch component only accepts Switch.Case and Switch.Default as children.",
    );
  });
});
