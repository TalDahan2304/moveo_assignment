import React from 'react'

function CodeBlockListItem({title}) {
  return (
    <li className="codeblock">
      <div>
        <h3>{title}</h3>
      </div>
    </li>
  )
}

export default CodeBlockListItem;