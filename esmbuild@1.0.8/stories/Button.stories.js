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

// src/stories/Button.stories.tsx
import React from "react";
import { Button } from "./Button.js";
var Button_stories_default = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};
var Template = (args) => /* @__PURE__ */ React.createElement(Button, __spreadValues({}, args));
var Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button"
};
var Secondary = Template.bind({});
Secondary.args = {
  label: "Button"
};
var Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};
var Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};
export {
  Large,
  Primary,
  Secondary,
  Small,
  Button_stories_default as default
};
