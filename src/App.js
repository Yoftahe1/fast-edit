import React, { useState } from "react";
import Split from "react-split";
import Editor from "./component/Editor";
import Export from "./component/export";
const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("*{\n  margin:0;\n  padding:0;\n}");
  const [js, setJs] = useState("");
  const [isExporting, setIsExporting] = useState(false);
  // const windowWidth = window.screen.availWidth;
  const srcDoc = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>${css}</style>
  </head>
  <body>
    ${html}
    <script>${js}</script>
  </body>
  </html>
`;
  function exportFile() {
    setIsExporting(true);
  }

  return (
    <div className="container">
      {isExporting ? (
        <Export setIsExporting={setIsExporting} file={srcDoc} />
      ) : null}
      <div className="top-pane">
        <div className="header">
          <h2>FAST EDIT</h2>
          <button className="export-button" onClick={exportFile}>
            EXPORT
          </button>
        </div>
        <Split className="split" minSize={50}>
          <Editor language="HTML" value={html} onChange={setHtml} />
          <Editor language="CSS" value={css} onChange={setCss} />
          <Editor language="JS" value={js} onChange={setJs} />
        </Split>
      </div>
      <div className="bottom-pane">
        <iframe className="iframe" title="output" srcDoc={srcDoc} />
      </div>
    </div>
  );
};

export default App;
