//jshint esversion:6
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const md5 = require('md5')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

// Create Schema
const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String
  }
)

// Create Collection
const User = mongoose.model("User", userSchema);

let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}

app.get("/", function(req, res)
{
  res.render("home");
})

app.get("/login", function(req, res)
{
  res.render("login");
})

app.get("/register", function(req, res)
{
  res.render("register");
})

app.post("/register", function(req, res)
{

})

app.post("/login", function(req, res)
{

})

app.listen(port, function() {
  console.log("Server started on port 3000");
});
