import React, { useContext } from 'react'
import Editor from '../component/Editor';
import storeContext from '../store/Store';

const OtherProgramingLanguagePage = (props) => {
  const storeCtx=useContext(storeContext)
  console.log(storeCtx.otherLanguage)
  return (
    <div>
        <Editor language={storeCtx.selectedLanguage} value={storeCtx.otherLanguage} onChange={storeCtx.otherLanguageHandler} />
    </div>
  )
}

export default OtherProgramingLanguagePage