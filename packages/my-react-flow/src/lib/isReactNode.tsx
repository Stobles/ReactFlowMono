import { isValidElement } from "react";

export function isReactNode(value: unknown): value is React.ReactNode {
  if (
    value === null ||
    value === undefined ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.every(isReactNode);
  }

  if (isValidElement(value)) {
    return true;
  }

  return false;
}
