import React, { useState, createContext } from "react";

const storeContext = createContext({
  html: "",
  css: "*{\n  margin:0;\n  padding:0;\n}",
  js: "",
  otherLanguage:"",
  otherLanguageOutput:{},
  selectedLanguage:"web",
  isExporting: false,
  isSuccess:null,
  htmlHandler: (html) => {},
  cssHandler: (css) => {},
  jsHandler: (js) => {},
  otherLanguageHandler:(otherLanguage)=>{},
  otherLanguageOutputHandler:(otherLanguageOutput)=>{},
  isExportingHandler: () => {},
  successHandler:()=>{}
});

export function StoreContextProvider(props) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("*{\n  margin:0;\n  padding:0;\n}");
  const [js, setJs] = useState("");
  const [otherLanguage,setOtherLanguage]=useState('')
  const [otherLanguageOutput,setOtherLanguageOutput]=useState('run your code to see output')
  const [selectedLanguage, setSelectedLanguage] = useState("web");
  const [isExporting, setIsExporting] = useState(false);
  const [isSuccess, setIsSuccess]=useState(null)
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
  function otherLanguageOutputHandler(otherLanguageOutput) {
    setOtherLanguageOutput(otherLanguageOutput);
  }
  function selectedLanguageHandler(selectedLanguage) {
    setSelectedLanguage(selectedLanguage);
  }
  function isExportingHandler() {
    setIsExporting(!isExporting);
  }
  function successHandler(isSuccess){
    setIsSuccess(isSuccess)
  }
  const contextValues = {
    html: html,
    css: css,
    js: js,
    otherLanguage:otherLanguage,
    otherLanguageOutput:otherLanguageOutput,
    selectedLanguage:selectedLanguage,
    isExporting: isExporting,
    isSuccess:isSuccess,
    htmlHandler: htmlHandler,
    cssHandler: cssHandler,
    jsHandler: jsHandler,
    otherLanguageHandler:otherLanguageHandler,
    otherLanguageOutputHandler:otherLanguageOutputHandler,
    selectedLanguageHandler:selectedLanguageHandler,
    isExportingHandler: isExportingHandler,
    successHandler:successHandler
  };
  return (
    <storeContext.Provider value={contextValues}>
      {props.children}
    </storeContext.Provider>
  );
}

export default storeContext;
