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
              : props.language==='cpp'
              ? [cpp({ jsx: true })]
              : props.language==='java'
              ? [java({ jsx: true })]
              : props.language==='py'
              ? [python({ jsx: true })]
              : [javascript({ jsx: true })]
          }
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default Editor;
