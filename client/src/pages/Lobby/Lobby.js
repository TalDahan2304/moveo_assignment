import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LobbyStyle.css";
import CodeBlockListItem from "../../Components/CodeBlockListItem";
import hljs from "highlight.js";


const Lobby = ({arrBlocks}) => {
  
  return (
    <div>
      <h1>Coding App</h1>
      <div className="blockList">
      <section className="blocks">
          {arrBlocks?.map((block, index)=>(
            <Link key={index} to={`/${block.pageId}`}>
              <CodeBlockListItem title={block.title}/>
            </Link>
          ))}
      </section>
      </div>
    </div>
  )
}

export default Lobby;
