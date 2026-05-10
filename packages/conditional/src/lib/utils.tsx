import { FC, isValidElement } from "react";
import { ChildType } from "./types";
import { Case } from "./switch/case/case";
import { Default } from "./switch/default/default";

import { ERROR_MESSAGES } from "./constants";

/**
 * Splits `Switch` children into case and default branches while enforcing the
 * library's runtime invariants.
 */
export const getSwitchConfig = (childrenArray: ChildType[]) => {
  const cases = filterChildrenByType(Case, childrenArray);
  const defaults = filterChildrenByType(Default, childrenArray);

  if (cases.length === 0) throw new Error(ERROR_MESSAGES.CASE_ERROR);
  if (defaults.length !== 1) throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);

  const nonValidChild = childrenArray.some(
    (child) =>
      !isValidElement(child) || (child.type !== Case && child.type !== Default)
  );

  if (nonValidChild) throw new Error(ERROR_MESSAGES.SWITCH_ERROR);

  return { cases, defaults };
};

function filterChildrenByType<T>(type: FC<T>, childrenArray: ChildType[]) {
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === type
  );
};
