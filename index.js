const { json } = require("express");
const express = require("express");
const server=express();
// const bodyParser=require("body-parser");
// server.use(bodyParser.urlencoded({extended:true}));
server.use(express.json);

server.get("/",(req,res)=>{
    // res.send("running...")
    res.sendFile("index.html");
});
server.listen(4000,()=>{
  console.log("server online");
});