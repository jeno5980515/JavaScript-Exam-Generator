import React from 'react' ;
import { saveFile } from '../multify' ;

const SaveButton = ({ onClick }) => {
  return (
    <button 
      onClick={() => onClick(saveFile)}
    >
    Save
    </button>
  )
}

export default SaveButton ;