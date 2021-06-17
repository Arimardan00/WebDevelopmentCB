const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
  res.send("Hello World");
})

// function middleWare1 (req, res, next) {
//   console.log(req.url);
//   res.send("abcd");
// }

app.get("/greet", (req, res)=>{
  let person = "guest";
  if(req.query.person) 
    person = req.query.person;
  res.send("Good Morning " + person);
})

app.post("/greet", (req, res) => {
  let person = "guest";
  console.log(req.body);
  if (req.body.person) person = req.body.person;
  res.send("Good Evening " + person);
});


app.get("/form", (req, res)=>{
  res.sendFile(__dirname + "/files/form.html");
})

// Path parameters
app.get("/:city/welcome", (req, res)=>{
  res.send(`Welcome to ${req.params.city} city`);
})

// localhost:3333/{x}/{y}
app.get("/:city/:greeting", (req, res)=>{
  res.send(`${req.params.greeting} to ${req.params.city}!`);
})

app.listen(3333, ()=>{
  console.log('Server started on http://localhost:3333');
})