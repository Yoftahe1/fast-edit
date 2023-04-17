import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import storeContext from "../store/Store";
import styles from "./export.module.css";
const Export = (props) => {
  const storeCtx = useContext(storeContext);
  const [fileName, setFileName] = useState("website");
  let srcDoc = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fileName}</title>
    <style>${storeCtx.css}</style>
  </head>
  <body>
    ${storeCtx.html}
    <script>${storeCtx.js}</script>
  </body>
  </html>
`;

  function changeHandler(event) {
    setFileName(event.target.value);
  }
  function exported() {
    const element = document.createElement("a");
    const file = new Blob([srcDoc], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${fileName}.html`;
    document.body.appendChild(element);
    element.click();
    storeCtx.isExportingHandler();
  }
  return createPortal(
    <>
      <div className={styles.overlay} onClick={storeCtx.isExportingHandler} />
      <div className={styles.modal}>
        <h4 className={styles.h4}>Export File</h4>
        <p className={styles.p}>Save File As</p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={changeHandler}
          className={styles.input}
        />
        <br />
        <button className={styles.button} onClick={storeCtx.isExportingHandler}>
          Cancel
        </button>
        <button className={styles.button} onClick={exported}>
          export
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default Export;
