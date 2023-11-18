import getCssSelector from "css-selector-generator";

var clickedEl: any|HTMLElement = null;

document.addEventListener("contextmenu", function(event){
    clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "getClickedEl") {
        sendResponse({selector: getCssSelector(clickedEl)});
    }
});

(function() {
  var s = document.createElement('script');
  s.src = chrome.runtime.getURL('js/inject.js');
  s.onload = () => {
    s.remove();
  }
  (document.head || document.documentElement).appendChild(s);
})()
