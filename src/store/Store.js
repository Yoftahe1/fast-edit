import React, { useState, createContext } from "react";

const storeContext = createContext({
  html: "",
  css: "*{\n  margin:0;\n  padding:0;\n}",
  js: "",
  isExporting: false,
  htmlHandler: (html) => {},
  cssHandler: (css) => {},
  jsHandler: (js) => {},
  isExportingHandler: () => {},
});

export function StoreContextProvider(props) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("*{\n  margin:0;\n  padding:0;\n}");
  const [js, setJs] = useState("");
  const [isExporting, setIsExporting] = useState(false);
  function htmlHandler(html) {
    setHtml(html);
  }
  function cssHandler(css) {
    setCss(css);
  }
  function jsHandler(js) {
    setJs(js);
  }
  function isExportingHandler() {
    setIsExporting(!isExporting);
  }
  const contextValues = {
    html: html,
    css: css,
    js: js,
    isExporting: isExporting,
    htmlHandler: htmlHandler,
    cssHandler: cssHandler,
    jsHandler: jsHandler,
    isExportingHandler: isExportingHandler,
  };
  return (
    <storeContext.Provider value={contextValues}>
      {props.children}
    </storeContext.Provider>
  );
}

export default storeContext;
