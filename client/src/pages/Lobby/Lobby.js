import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LobbyStyle.css";
import { Link } from "react-router-dom";

const CodeBlockListItem = (props) => {
  return (
    <li className="codeblock">
      <div>
        <h3>{props.title}</h3>
      </div>
    </li>
  );
};

const CodeBlockList = () => {
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

  const nav = useNavigate();

  const navCodeBlock = (id) => {
    console.log(id);
    nav(`${id}`);
  };

  const codeBlocksList = Details.map((codeBlockitem, index) => (
    <CodeBlockListItem
      key={index}
      id={codeBlockitem.id}
      title={codeBlockitem.title}
    />
  ));

  return (
    <div>
      <h2>choose Code:</h2>
      <section className="codeblocks">
        <ul>
          {codeBlocksList.map((codeBlockitem, index) => (
            <Link to={codeBlockitem.props.id} key={index}>
              <CodeBlockListItem title={codeBlockitem} />
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};

const Lobby = () => {
  return (
    <div>
      <h1>Coding App</h1>
      <CodeBlockList></CodeBlockList>
    </div>
  );
};

export default Lobby;
