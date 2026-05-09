import { describe, expect, it } from "vitest";
import { getSwitchConfig } from "./utils";
import { Case } from "./switch/case/case";
import { Default } from "./switch/default/default";

describe("getSwitchConfig", () => {
  it("returns grouped case and default children", () => {
    const config = getSwitchConfig([
      <Case condition={false}>First case</Case>,
      <Case condition>Second case</Case>,
      <Default>Fallback content</Default>,
    ]);

    expect(config.cases).toHaveLength(2);
    expect(config.defaults).toHaveLength(1);
  });

  it("throws when there is no case child", () => {
    expect(() => getSwitchConfig([<Default>Fallback content</Default>])).toThrowError(
      "Switch component requires at least one Switch.Case.",
    );
  });

  it("throws when there is not exactly one default child", () => {
    expect(() =>
      getSwitchConfig([<Case condition>Case content</Case>]),
    ).toThrowError("Switch component requires exactly one Switch.Default.");

    expect(() =>
      getSwitchConfig([
        <Case condition>Case content</Case>,
        <Default>Fallback one</Default>,
        <Default>Fallback two</Default>,
      ]),
    ).toThrowError("Switch component requires exactly one Switch.Default.");
  });

  it("throws when there is an invalid child", () => {
    expect(() =>
      getSwitchConfig([
        <Case condition>Case content</Case>,
        <p key="invalid">Invalid child</p>,
        <Default>Fallback content</Default>,
      ]),
    ).toThrowError(
      "Switch component only accepts Switch.Case and Switch.Default as children.",
    );
  });
});
