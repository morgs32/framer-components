// esbuild-css-modules-plugin-namespace:/tmp/tmp-1992-udkybDpT6u0V/main/src/Button.modules.css.js
var digest = "fb3874618bf2fce892d53c9ba8166103df0422a12339a5311a912c262a77eac2";
var css = `._button_kpmle_1 {
  background-color: #c8d5ff;
}
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_modules_css_default = { "button": "_button_kpmle_1" };

// src/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ React.createElement("button", {
    className: Button_modules_css_default.button
  }, title);
}
export {
  Button
};
