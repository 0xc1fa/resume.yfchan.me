import React, { ReactNode } from "react";

export function markdown(
  strings: TemplateStringsArray,
  ...values: ReactNode[]
): ReactNode[] {
  return strings.reduce((result, string, i) => {
    const parts = string.split("**");
    const parsedParts: ReactNode[] = [];

    parts.forEach((part, index) => {
      const subParts = part.split("--");
      subParts.forEach((subPart, subIndex) => {
        parsedParts.push(subPart);
        if (subIndex < subParts.length - 1) {
          parsedParts.push(<>&mdash;</>);
        }
      });

      if (index % 2 === 1) {
        parsedParts.push(
          <strong key={`bold-${i}-${index}`}>{parsedParts.pop()}</strong>
        );
      }
    });

    const value = values[i] ? values[i] : null;
    return [...result, ...parsedParts, value];
  }, [] as ReactNode[]);
}
