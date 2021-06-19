const express = require('express');
const app = express();
const todoRoute = require('./routes/todos')

app.set("view engine", "hbs");
app.use(express.urlencoded({extended: true}));

app.use('/todos', todoRoute);

app.listen(3333, ()=>{
  console.log("Server started at http://localhost:3333");
})