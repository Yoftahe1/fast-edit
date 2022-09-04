import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

function Editor(props) {
  const onChange = useCallback(
    (value, viewUpdate) => {
      props.onChange(value);
    },
    [props]
  );

  let ext = {
    HTML: [html({ jsx: true })],
    CSS: [css({ jsx: true })],
    cpp: [cpp({ jsx: true })],
    java: [java({ jsx: true })],
    py: [python({ jsx: true })],
    js: [javascript({ jsx: true })],
  };
  
  return (
    <div className="editor">
      <div className="editor-title">{props.language}</div>
      <div className="editor-text-area">
        <CodeMirror
          value={props.value}
          theme="dark"
          extensions={ext[props.language]}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default Editor;
