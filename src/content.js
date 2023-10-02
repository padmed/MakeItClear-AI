const browser = require("webextension-polyfill");

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "enableExtension") {
    console.log("heyea");
  }
});
