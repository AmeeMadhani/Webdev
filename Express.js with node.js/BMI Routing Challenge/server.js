const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalc.html")
});

app.post("/", function(req, res){
    //bodyparser allows you to go into any of your routes and 
    // console.log(req.body);
    //and then call them as if they were properties
    // console.log(req.body.num1);

    var weight = Number(req.body.weight);
    var height = Number(req.body.height); //bcause it was considering it string this is the way to convert them into numbers
    var bmi = Math.round(weight / Math.pow(height,2));
    res.send("The result of the calculation is: " + bmi);
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
});