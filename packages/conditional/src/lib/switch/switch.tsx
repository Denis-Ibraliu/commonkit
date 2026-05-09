import { Children,type ReactElement } from "react";
import { getSwitchConfig } from "../utils";
import { Default } from "./default/default";
import { Case } from "./case/case";
import { ConditionalProps } from "../types";

type AllowedChild = ReactElement<typeof Case | typeof Default>;
type Props = { children: AllowedChild | AllowedChild[] };

export const Switch = ({ children }: Props) => {
  const childrenArray = Children.toArray(children) as AllowedChild[];
  const { cases, defaults } = getSwitchConfig(childrenArray);

  const matchedCase = cases.find(
    (child) => (child as ReactElement<ConditionalProps>).props.condition,
  );

  return matchedCase || defaults[0];
};

Switch.Case = Case;
Switch.Default = Default;
