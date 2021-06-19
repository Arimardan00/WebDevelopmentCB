const express = require("express");
const app = express();
const pagesRoute = require("./routes/pages");
const apiRoute = require("./routes/api");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use("/", express.static(__dirname + "/public"));

app.use("/pages", pagesRoute);
app.use("/api", apiRoute);

app.listen(3333, function () {
  console.log("Server started at http://localhost:3333");
});
