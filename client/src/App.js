import "./App.css";
import React, { useState, useEffect }from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby/Lobby";
import Block from "./pages/Blocks/Block";


function App() {

  const [arrBlocks, setArrBlocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/JavaScriptHoisting', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {setArrBlocks(data.blockList);});      
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Lobby arrBlocks={arrBlocks}/>}></Route>
          {arrBlocks.map((page, index)=>(
            <Route key={index} path={`/${page.pageId}`} element={<Block title={page.title} blockCode={page.code} />}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
