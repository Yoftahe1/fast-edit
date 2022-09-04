import React, { useContext, useState,useEffect } from "react";
import Header from "../component/Header";
import Export from "../component/export";
import WebCodingPage from "./WebCodingPage";
import OtherProgramingLanguagePage from "./OtherProgramingLanguagePage";
import storeContext from "../store/Store";
import languages from "../constants/Languages";
const CodingPage = () => {
  const storeCtx = useContext(storeContext);
  const [showLanguage, setShowLanguage] = useState(false);
  const [isLoading,setISLoading]=useState(true)
  useEffect(()=>{
    storeCtx.selectedLanguageHandler(localStorage.getItem('selectedLanguage'))
    setISLoading(false)
  },[storeCtx])

  function changeLanguageHandler(element) {
    if (storeCtx.selectedLanguage !== element) {
      storeCtx.otherLanguageHandler("");
      storeCtx.otherLanguageOutputHandler("run your code to see output");

      localStorage.setItem("selectedLanguage", element);
    }
    storeCtx.selectedLanguageHandler(element);

    setShowLanguage(false);
  }
  if(isLoading) return<div><header/></div>
  
   return (
    <div className="coding-page" >
      {storeCtx.isExporting && <Export />}
      <Header showLanguage={showLanguage} setShowLanguage={setShowLanguage} />
       { showLanguage && (
        <div className="languages">
          {languages.map((element, index) => (
            <div
              className="language"
              key={index}
              onClick={() => changeLanguageHandler(element)}
            >
              {element}
            </div>
          ))}
        </div>
      )}
      {storeCtx.selectedLanguage === "web" ? (
        <WebCodingPage />
      ) : (
        <OtherProgramingLanguagePage />
      )}
    </div>
  );
};

export default CodingPage;
