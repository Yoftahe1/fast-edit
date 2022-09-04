import React, { useContext } from 'react'
import Editor from '../component/Editor';
import storeContext from '../store/Store';

const OtherProgramingLanguagePage = (props) => {
  const storeCtx=useContext(storeContext)
  return (
    <div>
        <Editor language={storeCtx.selectedLanguage} value={storeCtx.otherLanguage} onChange={storeCtx.otherLanguageHandler} />
        <textarea className='textarea' value={storeCtx.otherLanguageOutput} readOnly/>
    </div>
  )
}

export default OtherProgramingLanguagePage