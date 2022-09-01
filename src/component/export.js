import React, { useState } from "react";
import { createPortal } from "react-dom";
const Export = (props) => {
  const [fileName, setFileName] = useState("");
  function changeHandler(event) {
    setFileName(event.target.value);
  }
  function exported() {
    const element = document.createElement("a");
    const file = new Blob([props.file], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${fileName}.html`;
    document.body.appendChild(element);
    element.click();
    props.setIsExporting(false);
  }
  return createPortal(
    <>
      <div className="overlay" />
      <div className="export-modal">
        <h3>Export File</h3>
        <p>Save File As</p>
        <input type="text" placeholder="Enter Name" onChange={changeHandler} />
        <br />
        <button
          className="export-button"
          onClick={() => props.setIsExporting(false)}
        >
          Cancel
        </button>
        <button className="export-button" onClick={exported}>
          export
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Export;
