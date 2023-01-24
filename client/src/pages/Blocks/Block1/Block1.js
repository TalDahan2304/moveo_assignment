import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hljs from "highlight.js";
import "./Block1Style.css";
import { marked } from "marked";
let io = require('socket.io-client');

const Block1 = (props) => {
  const firstCode = `
  \`\`\`javascript
    const variable = 'hello';

    function getProfile(id: string): {
      name: string; address: string, photo: string
    } {
      return {
        name: 'ben', address: "ben's house", photo: "/ben.png"
      };
    }
  \`\`\`
  `;
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const highlightCode = () => {
    hljs.highlightBlock(document.getElementById("code-area"));
  };

  function Index() {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
  }



  const [users, setUsers] = useState([]);
  

  useEffect(() => {
   const socket2 = io("http://localhost:3001");
    socket2.on('whoIsConnected', data => {
      console.log('Connected to server ' + data);
      setUsers(data);
    });
    return()=>{ socket2.disconnect();}
  },[]);

  return (
    <div>
      <h1>JavaScript Hoisting {users===1 ? "Admin" : "Student"}</h1>
      <textarea
          id="code-area"
          rows="30"
          cols="100"
          disabled={users === 1 ? true : false}
          onChange={(event) => {
            setCode(event.target.value);
          }}
          language="javascript"
          value={code || firstCode}
        />
    </div>
  );
};

export default Block1;
