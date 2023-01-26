import React from 'react';
import './CodeBlockListItemStyle.css'

function CodeBlockListItem({title}) {
  return (
      <div className="codeblock">
        <h3>{title}</h3>
      </div>
    
  )
}

export default CodeBlockListItem;