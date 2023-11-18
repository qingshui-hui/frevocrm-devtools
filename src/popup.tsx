import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { printCustomEvents } from "./injects/printCustomEvents"
import { hilightClickEvents } from "./injects/hilightClickEvents";
import { getCurrentTab } from "./utils";

const Popup = () => {
  const [count, setCount] = useState(0);
  const [currentURL, setCurrentURL] = useState<string>();

  useEffect(() => {
    chrome.action.setBadgeText({ text: count.toString() });
  }, [count]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
  }, []);

  const changeBackground = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            color: "#555555",
          },
          (msg) => {
            console.log("result message:", msg);
          }
        );
      }
    });
  };

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

  return (
    <>
      <div style={{ minWidth: "300px" }}></div>
      <button onClick={changeBackground}>change background</button>
      <button onClick={envokeHilightClickEvents}>hilight click events</button>
      <button onClick={envokePrintCustomEvents}>print custom events</button>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
