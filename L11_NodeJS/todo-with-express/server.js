const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

let tasks = ["sample task"];

app.get("/", (req, res) => {
  res.render('home', {
    title: "Todo List",
    tasks
  })
});

app.post('/', (req, res)=>{
  tasks.push(req.body.newTask);
  res.redirect('/');
})

app.listen(3333, () => {
  console.log("started");
});
