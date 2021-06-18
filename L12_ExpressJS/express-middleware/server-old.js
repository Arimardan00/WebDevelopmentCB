const express = require("express");
const app = express();

function mw1(req, res, next){
  console.log('m1 pre-next');
  next();
  console.log("m1 post-next");
} 

function mw2(req, res, next) {
  console.log("m2 pre-next");
  next();
  console.log("m2 post-next");
} 

function mw3(req, res, next) {
  console.log("m3 pre-next");
  next();
  console.log("m3 post-next");
} 

app.get('/hello', mw2, mw3, (req, res)=>{
  console.log("pre-send");
  res.send("Hello World");
  console.log("post-send");
})

app.listen(3333, ()=>{
  console.log("Server started at http://localhost:3333");
})