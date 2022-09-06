import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import storeContext from "../store/Store";
import qs from "qs";
import Axios from "axios";
const Header = (props) => {
  const navigate=useNavigate();
  const storeCtx = useContext(storeContext);
  function execute() {
    if(storeCtx.otherLanguage.trim().length===0)storeCtx.otherLanguageOutputHandler("INPUT IS EMPTY")
    else storeCtx.otherLanguageOutputHandler("LOADING...");
    var data = qs.stringify({
      code: storeCtx.otherLanguage,
      language: storeCtx.selectedLanguage,
      input: "",
    });
    var config = {
      method: "post",
      url: "https://codex-api.herokuapp.com/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    Axios(config)
      .then(function (response) {
        
      storeCtx.successHandler(response.data.success)
        if (response.data.output) {
          storeCtx.otherLanguageOutputHandler(response.data.output);
           
        } else {
          storeCtx.otherLanguageOutputHandler(response.data.error);
        }
      })
      .catch(function (error) {});
  }

  return (
    <>
      <div className="header">
        <h2 onClick={()=>navigate('/')}>FAST EDIT</h2>
        <div className="header-btns">
          {storeCtx.selectedLanguage !== "web" && (
            <button className="export-button" onClick={execute}>
              RUN
            </button>
          )}
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
            {props.showLanguage ? "CANCEL" : "LANGUAGES"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
