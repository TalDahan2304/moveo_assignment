const express = require('express');
const app = express();
const http = require ('http');
const {Server} = require('socket.io');
const cors=require('cors');
const indexRouter = require('./routes/index_routes');
app.use('/', indexRouter);
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin:"http://localhost:3000",
        methods:["GET", "POST"],
    },
});

server.listen(3001, ()=>{
    console.log("SERVER IS RUNNING");
});
var connectedCount = 0;



io.on("connection", (socket) =>{
    connectedCount+=1;
    socket.emit("whoIsConnected", connectedCount);
    socket.on("disconnect", function(){
        connectedCount -= 1;
      });
    
})




