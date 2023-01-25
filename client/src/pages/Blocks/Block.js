import React, { useState, useEffect } from "react";
import "./BlockStyle.css";
let io = require('socket.io-client');

const Block = ({title, blockCode}) => {
  const [code, setCode] = useState(blockCode);
  const [users, setUsers] = useState([]);
  
  const handleChange = (event) => {
    const newcode=event.target.value;
    setCode(newcode);
    const socket = io("http://localhost:3001");
    socket.emit("updateCode",newcode);

  };

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
      <h1>{title} {users===1 ? "Admin" : "Student"}</h1>
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

export default Block;
