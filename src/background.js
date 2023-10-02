// const browser = require("webextension-polyfill");
import { runtime, contextMenus, tabs } from "webextension-polyfill";

runtime.onInstalled.addListener(() => {
  contextMenus.create({
    title: "Describe text",
    contexts: ["selection"],
    id: "describeText",
  });
});

contextMenus.onClicked.addListener(async (info, tab) => {
  if (tab.url && tab.url.startsWith("chrome://extensions/")) {
    console.log("Extension is disabled on chrome://extensions/");
    return;
  }

  if (info.menuItemId === "describeText") {
    tabs.sendMessage(tab.id, {
      action: "enableExtension",
      selectedText: info.selectionText,
    });
  }
});
