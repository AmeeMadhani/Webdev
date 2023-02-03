//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// import express from "express";
// import bodyParser from "body-parser";
// console.log(date());
const app = express();

//placement of the below line is very important just below u declare your app
let items = ["Eat", "Sleep", "repeat"]; //you may add the things u want there always here
let workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  
//   var currentDay = today.getDay();
//   var day = "";
//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;

//     default:
//         console.log("Error");
//   }

  // if(today.getDate() == 6 || today.getDay() == 0){
  //     day = "weekend";
  //     }else{
  //     day = "weekday";
  // }
  
  //item will give an error here because item is only creted when post is requested
  let day = date.getDate(); //this is where you want to call it

  res.render("list", { listTitle: day, newListItems: items });
});

//we might need alot of of html pages now
//to send multiple responses we came up with res.write se res.sendFile but
//so we are not using ejs

app.post("/", function(req,res){
  // console.log(req.body);
  let item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");

  }else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function (req,res){
  res.render("list", {listTitle: "Work List", newListItems:workItems})
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");

});

app.get("/about", function(req,res){
  res.render("about");
});



app.listen(3000, function () {
  console.log("server started on port 3000");
});

//functions - var let const are all locals inside and all global outside

//variables inside anything that has curly braces, var is global, let and const are locals

//USE LET INSTEAD OF VAR MOST OF THE TIMEESS

