import React, { useContext } from 'react'
import Editor from '../component/Editor';
import storeContext from '../store/Store';

const OtherProgramingLanguagePage = (props) => {
  const storeCtx=useContext(storeContext)
  if(storeCtx.isSuccess){var id='true'}
  else if(storeCtx.isSuccess===false){ id='false'}
  return (
    <div>
        <Editor language={storeCtx.selectedLanguage} value={storeCtx.otherLanguage} onChange={storeCtx.otherLanguageHandler} />
        <textarea className='textarea' id={id}value={storeCtx.otherLanguageOutput} readOnly/>
    </div>
  )
}

export default OtherProgramingLanguagePage