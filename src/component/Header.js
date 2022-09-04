import React, { useContext } from "react";
import storeContext from "../store/Store";
import qs from "qs";
import Axios from "axios";
const Header = (props) => {
  const storeCtx = useContext(storeContext);
  function execute() {
    storeCtx.otherLanguageOutputHandler("LOADING...");
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
        console.log(response.data);
        
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
        <h2>FAST EDIT</h2>
        <span>
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
            {props.showLanguage ? "CANCEL" : "CHOOSE LANGUAGE"}
          </button>
        </span>
      </div>
    </>
  );
};

export default Header;
