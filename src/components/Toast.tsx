"use client";
import clsx from "clsx";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

type ToastProps = {
  thisHash: string;
};

export default function Toast(props: ToastProps) {
  const [closed, setClosed] = useState(false);
  const fromHash = useSearchParams().get("from");

  return (
    <div
      hidden={closed}
      className={clsx(
        "screen-only",
        !fromHash
          ? "bg-green"
          : fromHash === props.thisHash
          ? "bg-green"
          : "bg-red"
      )}
      id="popup"
      style={{
        top: 0,
        right: 0,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI"',
        padding: "0.3em",
        color: "white",
        position: "fixed",
      }}
    >
      <div id="up-to-date-info">
        {!fromHash
          ? ""
          : fromHash === props.thisHash
          ? "Your document is up to date"
          : "Your document is NOT to date"}
      </div>
      <kbd>Ctrl+S</kbd>: Show all
      <br />
      <kbd>Ctrl+H</kbd>: Hide all
      <button className="inherit hover-pointer" onClick={() => setClosed(true)}>
        X
      </button>
    </div>
  );
}
