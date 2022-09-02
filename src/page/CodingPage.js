import React, { useContext, useState } from "react";
import Header from "../component/Header";
import Export from "../component/export";
import WebCodingPage from "./WebCodingPage";
import OtherProgramingLanguagePage from "./OtherProgramingLanguagePage";
import storeContext from "../store/Store";
const CodingPage = () => {
  const storeCtx = useContext(storeContext);
  const [showLanguage, setShowLanguage] = useState(false);
  const languages = ["C++","JS","web"];
  function changeLanguageHAndler(element){
    setShowLanguage(false);
    if(storeCtx.selectedLanguage!==element){
      storeCtx.otherLanguageHandler('')
    }
    storeCtx.selectedLanguageHandler(element);
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
