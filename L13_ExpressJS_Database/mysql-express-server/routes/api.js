const route = require("express").Router();
// This route is on the "/api/" path
const db = require("../db");

route.get("/persons/", (req, res) => {
  db.getAllPersons()
    .then((persons) => res.send(persons))
    .catch((err) => res.send({ error: err }));
});

route.post("/persons/", (req, res) => {
  db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(() => res.redirect("/"))
    .catch((err) => res.send({ error: err }));
});

module.exports = route;
