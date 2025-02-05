const http = require("http")

http.

const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("view engine", "ejs");

app.use(morgan("dev"));


app.use((req, res, next) => {
  console.log("this is middleware ");
  return next();
});

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.send("about page");
});

app.listen(3000);
