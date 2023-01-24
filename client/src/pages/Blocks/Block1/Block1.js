import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hljs from "highlight.js";
import "./Block1Style.css";
import { marked } from "marked";
let io = require('socket.io-client');

const Block1 = (props) => {
  // const code = `
  // \`\`\`javascript
  //   const variable = 'hello';

  //   function getProfile(id: string): {
  //     name: string; address: string, photo: string
  //   } {
  //     return {
  //       name: 'ben', address: "ben's house", photo: "/ben.png"
  //     };
  //   }
  // \`\`\`
  // `;
  const [code, setCode] = useState("abcds");
  
  const handleChange = (event) => {
    console.log("changed")
    const newcode=event.target.value;
    setCode(newcode);
    const socket = io("http://localhost:3001");
    socket.emit("updateCode",newcode);

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
    const socket = io("http://localhost:3001");
  socket.on('changeBlock1', data => {
    setCode(data)
  });

    socket.on('whoIsConnected', data => {
      setUsers(data);
    });
    return()=>{ socket.disconnect();}
  },[]);

  return (
    <div>
      <h1>JavaScript Hoisting {users===1 ? "Admin" : "Student"}</h1>
      <textarea
          id="code-area"
          rows="30"
          cols="100"
          disabled={users === 1 ? true : false}
          onChange={handleChange}
          language="javascript"
          value={code}
        />
    </div>
  );
};

export default Block1;