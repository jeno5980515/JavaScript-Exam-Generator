import React from 'react' ;
import { copyQuestion } from '../multify' ;

const CopyButton = ({ onClick }) => {
  return (
    <button 
      onClick={() => onClick(copyQuestion)}
    >
    Copy
    </button>
  )
}

export default CopyButton ;