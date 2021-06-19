const express = require("express");
const app = express();
const db = require("./db")

app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");

app.get("/", (req, res, next)=>{
  db.getAllPersons()
    .then((persons)=>{
      res.render("persons", {persons})
    })
    .catch(err=>{
      res.send(err);
    })

})

app.get("/add", (req, res, next)=>{
  res.render("persons_add");
})

app.post("/add", (req, res, next)=>{
  db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(()=>{
      res.redirect('/');      
    })
    .catch((err)=>{
      res.send(err);
    })
})

app.listen(3333, function(){
  console.log("Server started at http://localhost:3333");
})

