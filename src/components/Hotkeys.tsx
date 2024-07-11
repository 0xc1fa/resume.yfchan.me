"use client";

import { useEffect } from "react";

export function Hotkeys() {
  useEffect(() => {
    function showAllDetails() {
      document.body
        .querySelectorAll("details")
        .forEach((detail) => (detail.open = true));
    }

    function hideAllDetails() {
      document.body
        .querySelectorAll("details")
        .forEach((detail) => (detail.open = false));
    }

    document.body.addEventListener("keydown", function (event) {
      if (event.ctrlKey) {
        if (event.key === "S" || event.key === "s") {
          showAllDetails();
        } else if (event.key === "H" || event.key === "h") {
          hideAllDetails();
        }
      }
    });
  }, []);

  return <></>;
}
