import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { printCustomEvents } from "./injects/printCustomEvents"
import { hilightClickEvents } from "./injects/hilightClickEvents";
import { getCurrentTab } from "./utils";
import { printFieldNames } from "./injects/printFieldNames";

const Popup = () => {

  const envokePrintCustomEvents = async () => {
    chrome.scripting.executeScript({
      target: {tabId: (await getCurrentTab()).id as number},
      world: 'MAIN',
      func: printCustomEvents,
    })
  }
  const envokeHilightClickEvents = async () => {
    chrome.scripting.executeScript({
      target: {tabId: (await getCurrentTab()).id as number},
      world: 'MAIN',
      func: hilightClickEvents,
      args: [],
    })
  }
  const envokePrintFieldNames = async () => {
    chrome.scripting.executeScript({
      target: {tabId: (await getCurrentTab()).id as number},
      world: 'MAIN',
      func: printFieldNames,
    })
  }

  return (
    <>
      <div style={{ width: '140px' }}>
        <button onClick={envokeHilightClickEvents}>hilight click events</button>
      </div>
      <div style={{ marginTop: '4px' }}>
        <button onClick={envokePrintCustomEvents}>print custom events</button>
      </div>
      <div style={{ marginTop: '4px' }}>
        <button onClick={envokePrintFieldNames}>print field names</button>
      </div>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
