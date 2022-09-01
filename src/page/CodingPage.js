import React, { useContext } from "react";
import Header from "../component/Header";
import Export from "../component/export";
import WebCodingPage from "./WebCodingPage";
import storeContext from "../store/Store";
const CodingPage = () => {
  const storeCtx = useContext(storeContext);
  return (
    <div className="coding-page">
      {storeCtx.isExporting && <Export />}
      <Header />
      <WebCodingPage />
    </div>
  );
};

export default CodingPage;
