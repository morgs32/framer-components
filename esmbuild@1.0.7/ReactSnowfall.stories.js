// src/ReactSnowfall.stories.tsx
import React from "react";
import { ReactSnowfall } from "./ReactSnowfall.js";
var ReactSnowfall_stories_default = {
  title: "Example/ReactSnowfall",
  component: ReactSnowfall,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};
function Primary() {
  return /* @__PURE__ */ React.createElement(ReactSnowfall, null);
}
export {
  Primary,
  ReactSnowfall_stories_default as default
};
