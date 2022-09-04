import React, { useContext} from "react";
import storeContext from "../store/Store";
import Axios from 'axios'
const Header = (props) => {
  const storeCtx = useContext(storeContext);
  function execute(){
    storeCtx.otherLanguageOutputHandler("LOADING...")
    Axios.post('http://localhost:3001', {
      script : storeCtx.otherLanguage ,
      language: storeCtx.selectedLanguage,
        }).then((Response)=>{if(Response.data.output){storeCtx.otherLanguageOutputHandler(Response.data.output);}
        else{storeCtx.otherLanguageOutputHandler(Response.data.error);}
        console.log(storeCtx.otherLanguageOutput)}).catch((error)=>console.error())

        
  }
  storeCtx.selectedLanguageHandler(localStorage.getItem('selectedLanguage'))
  return (
    <>
      <div className="header">
        <h2>FAST EDIT</h2>
        <span>
        {storeCtx.selectedLanguage!=="web"&&<button className="export-button" onClick={execute}>RUN</button>}
          <button
            className="export-button"
            onClick={storeCtx.isExportingHandler}
          >
            EXPORT
          </button>
          <button
            className="language-button"
            onClick={() => props.setShowLanguage(!props.showLanguage)}
          >
            {props.showLanguage ? "CANCEL" : "CHOOSE LANGUAGE"}
          </button>
          
        </span>
      </div>
    </>
  );
};

export default Header;
