import clsx from "clsx";
import React from "react";

export type HeaderItemProps = {
  title: string;
  href?: string;
  icon?: React.ReactElement;
  screenOnly?: boolean;
  printOnly?: boolean;
  download?: string;
};
export function HeaderItem(props: HeaderItemProps) {
  return (
    <div
      className={clsx([
        props.screenOnly && "screen-only",
        props.printOnly && "print-only",
      ])}
    >
      {props.icon}
      {props.href ? (
        <a href={props.href} target="_blank" download={props.download}>
          {props.title}
        </a>
      ) : (
        <span>{props.title}</span>
      )}
    </div>
  );
}
