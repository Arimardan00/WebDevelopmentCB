const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));

function decryptQueryParams(req, res, next) {
  // decrypt the code
}

function decodeQueryBase64(req, res, next) {
  for(let q in req.query) {
    let data = req.query[q];
    data = new Buffer.from(data, 'base64').toString('ascii');
    req.query[q] = data;
  }
  next();
}

function evaluateCode(req, res, next) {
  for(let q in req.query){
    let data = req.query[q];
    data = eval(data);
    req.query[q] = data;
  }
  next();
}

app.get("/eval", decryptQueryParams, decodeQueryBase64, evaluateCode, (req, res)=>{
  console.log(req.query);
  res.send(`------ EVAL Result : ${req.query.code} ------`);
})

app.listen(3333, ()=>{
  console.log("Server started at http://localhost:3333");
})