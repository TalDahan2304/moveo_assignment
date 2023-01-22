import React, {useState, useEffect} from "react";

const CodeBlockListItem = () =>{
    return(
            <div></div>
    )
};


const CodeBlockList = () =>{
    return(
        <div>
            <CodeBlockListItem></CodeBlockListItem>
        </div>
    )
};

const Lobby = () =>{
    return(
        <div>
            <h1>Coding App</h1>
            <CodeBlockList></CodeBlockList>
        </div>
    )
};

export default Lobby;