var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/stories/Header.stories.tsx
import React from "react";
import { Header } from "./Header.js";
var Header_stories_default = {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen"
  }
};
var Template = (args) => /* @__PURE__ */ React.createElement(Header, __spreadValues({}, args));
var LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe"
  }
};
var LoggedOut = Template.bind({});
LoggedOut.args = {};
export {
  LoggedIn,
  LoggedOut,
  Header_stories_default as default
};
