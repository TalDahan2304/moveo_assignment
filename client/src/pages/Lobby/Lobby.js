import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LobbyStyle.css";
import { Link } from "react-router-dom";
import CodeBlockListItem from "../../Components/CodeBlockListItem"

const Details = [
  {
    id: "JavaScriptHoisting",
    title: "JavaScript Hoisting",
    code: "block1",
  },
  {
    id: "JavaScriptCallbacks",
    title: "JavaScript Callbacks",
    code: "block2",
  },
  {
    id: "JavaScriptForLoop",
    title: "JavaScript For Loop",
    code: "block3",
  },
  {
    id: "JavaScriptClosures",
    title: "JavaScript Closures",
    code: "block4",
  },
];

const Lobby = () => {
  return (
    <div>
      <h1>Coding App</h1>
      <div className="blockList">
      <section className="codeblocks">
        <ul>
          {Details.map((item, index)=>(
            <Link key={index} to={`/${item.id}`}>
              <CodeBlockListItem title={item.title}/>
            </Link>
          ))}
        </ul>
      </section>
      </div>
    </div>
  )
}

export default Lobby;
