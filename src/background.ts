import { printClickEvents } from "./injects/printClickEvents";

// https://qiita.com/FrogApp/items/cd64894721a0e4723047
chrome.runtime.onInstalled.addListener(function (details) {
  chrome.contextMenus.create({
    id: "get-click-events",
    title: "選択した要素のクリックイベントを取得",
    contexts: ["all"],
  });
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log(info)
  chrome.tabs.sendMessage(tab?.id as number, "getClickedEl", {frameId: info.frameId}, ({selector}) => {
    console.log(selector);
    chrome.scripting.executeScript({
      target: {tabId: tab?.id as number},
      world: 'MAIN',
      func: printClickEvents,
      args: [selector],
    })
  });
})
