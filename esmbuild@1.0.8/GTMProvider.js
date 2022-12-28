// node_modules/@elgorditosalsero/react-gtm-hook/dist/react-gtm-hook.esm.js
import React, { createContext, useReducer, useEffect, useContext } from "react";
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var DEFAULT_DOMAIN = "https://www.googletagmanager.com";
var getDataLayerSnippet = function getDataLayerSnippet2(dataLayer, dataLayerName) {
  if (dataLayerName === void 0) {
    dataLayerName = "dataLayer";
  }
  return "window." + dataLayerName + " = window." + dataLayerName + " || [];" + (dataLayer ? "window." + dataLayerName + ".push(" + JSON.stringify(dataLayer) + ")" : "");
};
var getIframeSnippet = function getIframeSnippet2(id, environment, customDomain) {
  if (customDomain === void 0) {
    customDomain = DEFAULT_DOMAIN;
  }
  var params = "";
  if (environment) {
    var gtm_auth = environment.gtm_auth, gtm_preview = environment.gtm_preview;
    params = "&gtm_auth=" + gtm_auth + "&gtm_preview=" + gtm_preview + "&gtm_cookies_win=x";
  }
  return '<iframe src="' + customDomain + "/ns.html?id=" + id + params + '" height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>';
};
var getGTMScript = function getGTMScript2(dataLayerName, id, environment, customDomain) {
  if (customDomain === void 0) {
    customDomain = DEFAULT_DOMAIN;
  }
  var params = "";
  if (environment) {
    var gtm_auth = environment.gtm_auth, gtm_preview = environment.gtm_preview;
    params = '+"&gtm_auth=' + gtm_auth + "&gtm_preview=" + gtm_preview + '&gtm_cookies_win=x"';
  }
  return "\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      '" + customDomain + "/gtm.js?id='+i+dl" + params + ";f.parentNode.insertBefore(j,f);\n    })(window,document,'script','" + dataLayerName + "','" + id + "');\n  ";
};
var setupGTM = function setupGTM2(params) {
  var getDataLayerScript = function getDataLayerScript2() {
    var dataLayerScript = document.createElement("script");
    if (params.nonce) {
      dataLayerScript.setAttribute("nonce", params.nonce);
    }
    dataLayerScript.innerHTML = getDataLayerSnippet(params.dataLayer, params.dataLayerName);
    return dataLayerScript;
  };
  var getNoScript = function getNoScript2() {
    var noScript = document.createElement("noscript");
    noScript.innerHTML = getIframeSnippet(params.id, params.environment, params.customDomain);
    return noScript;
  };
  var getScript = function getScript2() {
    var script = document.createElement("script");
    if (params.nonce) {
      script.setAttribute("nonce", params.nonce);
    }
    script.innerHTML = getGTMScript(params.dataLayerName, params.id, params.environment, params.customDomain);
    return script;
  };
  return {
    getDataLayerScript,
    getNoScript,
    getScript
  };
};
var initGTM = function initGTM2(_ref) {
  var dataLayer = _ref.dataLayer, dataLayerName = _ref.dataLayerName, environment = _ref.environment, nonce = _ref.nonce, id = _ref.id, customDomain = _ref.customDomain;
  var gtm = setupGTM({
    dataLayer,
    dataLayerName,
    environment,
    nonce,
    id,
    customDomain
  });
  var dataLayerScript = gtm.getDataLayerScript();
  var script = gtm.getScript();
  var noScript = gtm.getNoScript();
  document.head.insertBefore(dataLayerScript, document.head.childNodes[0]);
  document.head.insertBefore(script, document.head.childNodes[1]);
  document.body.insertBefore(noScript, document.body.childNodes[0]);
};
var sendToGTM = function sendToGTM2(_ref2) {
  var dataLayerName = _ref2.dataLayerName, data = _ref2.data;
  if (window[dataLayerName]) {
    window[dataLayerName].push(data);
  } else {
    console.warn("dataLayer " + dataLayerName + " does not exist, has script be initialized");
  }
};
var initialState = {
  dataLayer: void 0,
  dataLayerName: "dataLayer",
  environment: void 0,
  nonce: void 0,
  id: "",
  injectScript: true
};
var GTMContext = /* @__PURE__ */ createContext(initialState);
var GTMContextDispatch = /* @__PURE__ */ createContext(void 0);
function dataReducer(state, data) {
  sendToGTM({
    data,
    dataLayerName: state == null ? void 0 : state.dataLayerName
  });
  return state;
}
function GTMProvider(_ref) {
  var state = _ref.state, children = _ref.children;
  var _useReducer = useReducer(dataReducer, _extends({}, initialState, state)), store = _useReducer[0], dispatch = _useReducer[1];
  useEffect(function() {
    if (!state || state.injectScript == false)
      return;
    var mergedState = _extends({}, store, state);
    initGTM(mergedState);
  }, [JSON.stringify(state)]);
  return React.createElement(GTMContext.Provider, {
    value: store
  }, React.createElement(GTMContextDispatch.Provider, {
    value: dispatch
  }, children));
}
export {
  GTMProvider
};
