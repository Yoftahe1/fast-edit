import React, { useContext} from "react";
import storeContext from "../store/Store";

const Header = (props) => {
  const storeCtx = useContext(storeContext);
  return (
    <>
      <div className="header">
        <h2>FAST EDIT</h2>
        <span>
        {storeCtx.selectedLanguage!=="web"&&<button className="export-button">RUN</button>}
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
