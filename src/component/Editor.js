import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

function Editor(props) {
  const onChange = useCallback(
    (value, viewUpdate) => {
      props.onChange(value);
    },
    [props]
  );

  return (
    <div className="editor">
      <div className="editor-title">{props.language}</div>
      <div className="editor-text-area">
        <CodeMirror
          value={props.value}
          theme="dark"
          extensions={
            props.language === "HTML"
              ? [html({ jsx: true })]
              : props.language === "CSS"
              ? [css({ jsx: true })]
              : [javascript({ jsx: true })]
          }
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default Editor;
