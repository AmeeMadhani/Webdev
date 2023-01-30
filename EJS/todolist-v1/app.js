//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// import express from "express";
// import bodyParser from "body-parser";

const app = express();

//placement of the below line is very important just below u declare your app
var items = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday : "long",
    day: "numeric",
    month:"long"

  };


  var day = today.toLocaleDateString("en-US", options);

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

  res.render("list", { kindOfDay: day, newListItems: items });
});

//we might need alot of of html pages now
//to send multiple responses we came up with res.write se res.sendFile but
//so we are not using ejs

app.post("/", function(req,res){
  var item = req.body.newItem;
  items.push(item)

  res.redirect("/")
});


app.listen(3000, function () {
  console.log("server started on port 3000");
});

//functions - var let const are all locals inside and all global outside

//variables inside anything that has curly braces, var is global, let and const are locals

//USE LET INSTEAD OF VAR MOST OF THE TIMEESS
