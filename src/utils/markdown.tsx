import React, { ReactNode } from "react";

export function markdown(
  strings: TemplateStringsArray,
  ...values: ReactNode[]
): ReactNode[] {
  return strings.reduce((result, string, i) => {
    const parts = string.split("**");
    const parsedParts: ReactNode[] = [];

    parts.forEach((part, index) => {
      if (index % 2 === 1) {
        parsedParts.push(<strong key={`bold-${i}-${index}`}>{part}</strong>);
      } else {
        parsedParts.push(part);
      }
    });

    const value = values[i] ? values[i] : null;
    return [...result, ...parsedParts, value];
  }, [] as ReactNode[]);
}
