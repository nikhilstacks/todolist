// jshint esversion:6
//hello friend i am new branch
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
let inputs = ["Buy food", "Cook food", "Eat food"];


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",function(req, res){
    let day = date.getDate();
    res.render("lists", {listTitle: day, newListItems: inputs});

});

app.get('/about', function(req, res){
    res.render("about");
});

app.post('/',function(req, res){
  input = req.body.newTodo;
  inputs.push(input);
  res.redirect('/');
});

app.listen(3000,function(){
  console.log("Server is running on the port 3000");
});
