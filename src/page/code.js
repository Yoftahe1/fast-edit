import React, { useContext } from "react";
import Split from "react-split";
import Header from "../component/Header";
import Export from "../component/export";
import Editor from "../component/Editor";
import Store from "../store/Store";
import styles from "./code.module.css";
const Code = () => {
  const storeCtx = useContext(Store);
  const srcDoc = `
  <html>
    <body>${storeCtx.html}</body>
    <style>${storeCtx.css}</style>
    <script>${storeCtx.js}</script>
  </html>
`;
  return (
    <div className={styles.code}>
      {storeCtx.isExporting && <Export />}
      <Header />
      <div>
        <Split className={styles.split} minSize={50}>
          <Editor
            language="HTML"
            value={storeCtx.html}
            onChange={storeCtx.htmlHandler}
          />
          <Editor
            language="CSS"
            value={storeCtx.css}
            onChange={storeCtx.cssHandler}
          />
          <Editor
            language="js"
            value={storeCtx.js}
            onChange={storeCtx.jsHandler}
          />
        </Split>
      </div>
      <div className={styles.bottom}>
        <iframe title="output" srcDoc={srcDoc} />
      </div>
    </div>
  );
};

export default Code;
