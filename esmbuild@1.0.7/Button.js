// esbuild-css-modules-plugin-namespace:/tmp/tmp-1989-pn6aRI6cB5sT/main/src/Button.modules.css.js
var digest = "a1d6b7f3ea299b6ce74f1e6b0435388116c14cc60176602ca146b4c6bf613fe7";
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
