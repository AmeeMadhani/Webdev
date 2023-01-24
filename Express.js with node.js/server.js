const express = require('express');
const app = express();


//location is the first parameter.../ is the root
//callback function 

//oh wait it route "/"

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");

});

app.get("/contact" , function(req, res){
    res.send("Contact me at: ameemadhani5@gmail.com")
});

app.get("/about", function(req,res){
    res.send("I am too lazy to tell you about myself.")
});

app.get("/hobbies", function(req,res){
    res.send("<ul><li>code</li><li>coffee</li></ul>")
});


app.listen(3000, function(){
    console.log("Server started on port 3000")
});






//added a callback function to see when the server starts 


