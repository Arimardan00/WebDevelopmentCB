const express = require("express");
const app = express();
const todoRoute = require('./routes/todos');


app.use(express.urlencoded({extended: true}));

app.get("/hello", (req, res)=>{
  res.send("Hello World");
});

app.use("/public", express.static(__dirname + "/public"));

app.use("/todos", todoRoute);

app.listen(3333, ()=>{
  console.log("Server started at http://localhost:3333");
});
