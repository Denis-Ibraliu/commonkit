import { ConditionalProps } from "../types";

export const If = ({ condition, children }: ConditionalProps) => {
  return <>{condition ? children : null}</>;
};

