//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const _ = require("lodash");
// import express from "express";
// import bodyParser from "body-parser";
// console.log(date());
const app = express();

//placement of the below line is very important just below u declare your app
// let items = ["Eat", "Sleep", "repeat"]; //you may add the things u want there always here
// let workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

const itemsSchema = {
  name: String,
}

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name : "Eat"
});

const item2 = new Item({
  name : "Sleep"
});

const item3 = new Item({
  name : "Repeat"
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

Item.insertMany(defaultItems, function(err){
  if (err){
    console.log(err);

  }else{
    console.log("Successfully saved default items to database")
  }
});


  
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
  // let day = date.getDate(); //this is where you want to call it
app.get("/", function(req, res) {

  Item.find({}, function(err, foundItems){
    if (foundItems.length === 0){
      Item.insertMany(defaultItems, function(err){
        if(err){
          console.log(err)
        }else{
          console.log("successfully connected to db")
        }
      });
      res.redirect("/");
    
    }else{
    res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  });

  
});

app.get("/:customListName", function(req,res){
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name: customListName}, function(err, foundList){
    if (!err){
      if(! foundList){
        //create a list
        const list = new List({
          name: customListName,
          items: defaultItems
        });
      
        list.save();
        res.redirect("/" + customListName)

      }else {
        //show the existing list
        res.render("list", {listTitle: foundList.name, newListItems:foundList.items })
      }


    }
  })

  
});


//we might need alot of of html pages now
//to send multiple responses we came up with res.write se res.sendFile but
//so we are not using ejs

app.post("/", function(req,res){
  // console.log(req.body);
  const itemName  = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if(listName === "Today"){
    item.save();
    res.redirect("/");
  }else{
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
  
    });

  }

  // if (req.body.list === "Work"){
  //   workItems.push(item);
  //   res.redirect("/work");

  // }else{
  //   items.push(item);
  //   res.redirect("/");
  // }

});

app.post("/delete", function(req,res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

if (listName === "Today"){
  Item.findByIdAndDelete(checkedItemId, function(err){
    if (!err){
      console.log("Successfully deleted checked item.");
      res.redirect("/");
    }
   });

}else{
  List.findOneAndUpdate({name: listName},{$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
    if(!err){
      res.redirect("/" + listName);
    }
  });




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

