import React from "react";
import { createRoot } from "react-dom/client";
import Newtab from "@pages/Newtab/Newtab";
import "@pages/Newtab/index.css";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    return;
  }
  const root = createRoot(appContainer);
  root.render(<Newtab />);
}

init();
