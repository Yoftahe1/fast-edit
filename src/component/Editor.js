import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import styles from "./editor.module.css";
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
    js: [javascript({ jsx: true })],
  };

  return (
    <div className={styles.editor}>
      <div className={styles.title}>{props.language}</div>
      <div className={styles.textarea}>
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
