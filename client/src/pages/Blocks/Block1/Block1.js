import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hljs from "highlight.js";
import "./Block1Style.css";
import { marked } from "marked";
import axios from 'axios';
let io = require('socket.io-client');

const Block1 = (props) => {
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
  
  const getData = async()=>{
    const mydata = await axios.post('http://localhost:3000/JavaScriptHoisting');
    setCode(mydata.data)
  }

  useEffect(() => {
    getData();

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
