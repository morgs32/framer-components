// node_modules/@splitbee/web/dist/web.esm.js
var isBrowser = typeof window !== "undefined";
var SCRIPT_URL = "https://cdn.splitbee.io/sb.js";
var queue = [];
var handleLoad = function handleLoad2() {
  if (isBrowser && !window.splitbee)
    return;
  splitbee.track = window.splitbee.track;
  splitbee.user = window.splitbee.user;
  splitbee.enableCookie = window.splitbee.enableCookie;
  splitbee.reset = window.splitbee.reset;
  queue.forEach(function(ev) {
    if (ev.type === "track")
      window.splitbee.track.apply(null, ev.payload);
    else if (ev.type === "user")
      window.splitbee.user.set.apply(null, ev.payload);
    else if (ev.type === "enableCookie")
      window.splitbee.enableCookie.apply(null, ev.payload);
    else if (ev.type === "reset")
      window.splitbee.reset();
  });
  queue = [];
};
var createAddToQueue = function createAddToQueue2(type) {
  return function() {
    try {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      queue.push({
        type,
        payload: args
      });
      if (isBrowser && window.splitbee) {
        handleLoad();
      }
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var initSplitbee = function initSplitbee2(options) {
  if (!isBrowser || window.splitbee)
    return;
  var document = window.document;
  var scriptUrl = options !== null && options !== void 0 && options.scriptUrl ? options.scriptUrl : SCRIPT_URL;
  var injectedScript = document.querySelector("script[src='" + scriptUrl + "']");
  if (injectedScript) {
    injectedScript.onload = handleLoad;
    return;
  }
  var script = document.createElement("script");
  script.src = scriptUrl;
  script.async = true;
  if (options) {
    if (options.apiUrl)
      script.dataset.api = options.apiUrl;
    if (options.token)
      script.dataset.token = options.token;
    if (options.disableCookie)
      script.dataset.noCookie = "1";
  }
  script.onload = handleLoad;
  document.head.appendChild(script);
};
var splitbee = {
  track: /* @__PURE__ */ createAddToQueue("track"),
  user: {
    set: /* @__PURE__ */ createAddToQueue("user")
  },
  init: initSplitbee,
  enableCookie: /* @__PURE__ */ createAddToQueue("enableCookie"),
  reset: /* @__PURE__ */ createAddToQueue("reset")
};
var web_esm_default = splitbee;

// src/useSplitbee.ts
import { useEffect } from "react";
function useSplitbee(props) {
  useEffect(() => {
    web_esm_default.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive"
    });
  }, []);
}
export {
  useSplitbee
};
