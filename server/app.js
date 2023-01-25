const Code = require('../server/models/code_model')
const express = require('express');
const app = express();
const http = require ('http');
const {Server} = require('socket.io');
const cors=require('cors');
app.use(cors());
const blockRouter = require('./routes/block_routes')
app.use('/JavaScriptHoisting', blockRouter)
const server = http.createServer(app);

const mongoose = require('mongoose');
const DATABASE_URL = "mongodb://127.0.0.1/bootCampDb";
mongoose.connect(DATABASE_URL,{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', error=>{console.error(error)})

db.once('open', ()=>{
    console.log('db connected')
})


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
    socket.on("updateCode",(data)=>{
        io.emit("changeBlock1",data);
    });  
    
})




