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
      const subParsedParts: ReactNode[] = [];

      subParts.forEach((subPart, subIndex) => {
        const linkParts = subPart.split(/(\[.*?\]\(.*?\))/g);
        linkParts.forEach((linkPart, linkIndex) => {
          if (linkPart.match(/\[.*?\]\(.*?\)/)) {
            const match = linkPart.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
              const [, text, url] = match;
              subParsedParts.push(
                <a
                  href={url}
                  key={`link-${i}-${index}-${subIndex}-${linkIndex}`}
                >
                  {text}
                </a>
              );
            }
          } else {
            subParsedParts.push(linkPart);
          }
        });

        if (subIndex < subParts.length - 1) {
          subParsedParts.push(<>&mdash;</>);
        }
      });

      if (index % 2 === 1) {
        parsedParts.push(
          <strong key={`bold-${i}-${index}`}>{subParsedParts}</strong>
        );
      } else {
        parsedParts.push(...subParsedParts);
      }
    });

    const value = values[i] ? values[i] : null;
    return [...result, ...parsedParts, value];
  }, [] as ReactNode[]);
}
