import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import Editor from '../component/Editor';

const OtherProgramingLanguagePage = () => {
  return (
    <div>
        <Editor language="JS" value={js} onChange={setJs} />
    </div>
  )
}

export default OtherProgramingLanguagePage