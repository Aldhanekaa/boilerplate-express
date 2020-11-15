var express = require('express');
var app = express();

console.log("Hello World");
console.log(__dirname);
app.use(express.static(__dirname + "/public"))

// send file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})

// a simple API
app.get("/json", (req, res) => {
  res.json({"message": "Hello json"});
})

// the first solution
app.get("/", (req, res) => {
    res.send("Hello Express");
});

















































 module.exports = app;
