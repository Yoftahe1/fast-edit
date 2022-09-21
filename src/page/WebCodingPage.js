import React, { useContext } from "react";
import Split from "react-split";
import Editor from "../component/Editor";
import storeContext from "../store/Store";
const WebCodingPage = () => {
  const storeCtx = useContext(storeContext);
  const srcDoc = `
  <html>
    <body>${storeCtx.html}</body>
    <style>${storeCtx.css}</style>
    <script>${storeCtx.js}</script>
  </html>
`;
  return (
    <div className="container">
      <div className="top-pane">
        <Split className="split" minSize={50}>
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
      <div className="bottom-pane">
        <iframe className="iframe" title="output" srcDoc={srcDoc} />
      </div>
    </div>
  );
};
export default WebCodingPage;
