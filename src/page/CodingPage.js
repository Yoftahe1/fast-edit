import React, { useContext, useState } from "react";
import Header from "../component/Header";
import Export from "../component/export";
import WebCodingPage from "./WebCodingPage";
import OtherProgramingLanguagePage from "./OtherProgramingLanguagePage";
import storeContext from "../store/Store";
const CodingPage = () => {

  const storeCtx = useContext(storeContext);
  const [showLanguage, setShowLanguage] = useState(false);
  const languages = ["c","cpp","cs","go","java","js","py","web"];
  

  function changeLanguageHAndler(element){
    
    if(storeCtx.selectedLanguage!==element){
      storeCtx.otherLanguageHandler('')
      storeCtx.otherLanguageOutputHandler('')
    }
    storeCtx.selectedLanguageHandler(element);
    localStorage.setItem('selectedLanguage',element)
    console.log(localStorage.getItem('selectedLanguage'))
    setShowLanguage(false);
  }
  return (
    <div className="coding-page">
      {storeCtx.isExporting && <Export />}
      <Header showLanguage={showLanguage} setShowLanguage={setShowLanguage} />
      {showLanguage && (
        <div className="languages">
          {languages.map((element,index) => (
            <div
              className="language"
              key={index}
              onClick={()=>changeLanguageHAndler(element)}
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
