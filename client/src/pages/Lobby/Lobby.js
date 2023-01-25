import React from "react";
import { Link } from "react-router-dom";
import "./LobbyStyle.css";
import CodeBlockListItem from "../../Components/CodeBlockListItem"

const Lobby = ({arrBlocks}) => {
  return (
    <div>
      <h1>Coding App</h1>
      <div className="blockList">
      <section className="codeblocks">
        <ul>
          {arrBlocks?.map((block, index)=>(
            <Link key={index} to={`/${block.pageId}`}>
              <CodeBlockListItem title={block.title}/>
            </Link>
          ))}
        </ul>
      </section>
      </div>
    </div>
  )
}

export default Lobby;
