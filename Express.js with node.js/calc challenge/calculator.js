const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
//we will use urlencoded whenever we want to get data that is posted into our html form to our server
//extended = true is required for nested something idk

//bodyParser.text or bodyParser.json aise bahot hai google
 


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

//there is a form data in network tab and the click on succesfull vala phrase u will get it and then headers 
//we need that 



app.post("/", function(req, res){
    //bodyparser allows you to go into any of your routes and 
    // console.log(req.body);
    //and then call them as if they were properties
    // console.log(req.body.num1);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2); //bcause it was considering it string this is the way to convert them into numbers
    var result = num1 + num2;
    res.send("The result of the calculation is: " + result);
});



app.listen(3000, function(){
    console.log("Server started on port 3000")
});


