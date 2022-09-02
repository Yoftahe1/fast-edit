import React, { useState, createContext } from "react";

const storeContext = createContext({
  html: "",
  css: "*{\n  margin:0;\n  padding:0;\n}",
  js: "",
  otherLanguage:"",
  selectedLanguage:"web",
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
  const [otherLanguage,setOtherLanguage]=useState('')
  const [selectedLanguage, setSelectedLanguage] = useState("web");
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
  function otherLanguageHandler(otherLanguage) {
    setOtherLanguage(otherLanguage);
  }
  function selectedLanguageHandler(selectedLanguage) {
    setSelectedLanguage(selectedLanguage);
  }
  function isExportingHandler() {
    setIsExporting(!isExporting);
  }
  const contextValues = {
    html: html,
    css: css,
    js: js,
    otherLanguage:otherLanguage,
    selectedLanguage:selectedLanguage,
    isExporting: isExporting,
    htmlHandler: htmlHandler,
    cssHandler: cssHandler,
    jsHandler: jsHandler,
    otherLanguageHandler:otherLanguageHandler,
    selectedLanguageHandler:selectedLanguageHandler,
    isExportingHandler: isExportingHandler,
  };
  return (
    <storeContext.Provider value={contextValues}>
      {props.children}
    </storeContext.Provider>
  );
}

export default storeContext;
