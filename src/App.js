require('dotenv').config();

let express = require("express");
let app = express();

const note = {
  message: "Hello json",
};

console.log("Hello world");

app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));

absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (rq, rs) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    note.message = note.message.toUpperCase();
  }

  rs.json(note);
});

module.exports = app;
