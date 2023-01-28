const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    
    

    //response code mdn https response status codes doc
    //http dog version is cute and funny
});

app.post("/", function(req,res){

    const query = req.body.cityName
    const apikey = "b449cd0efda1f342bbffd87241f8477f"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=" + apikey + "&units=" + unit;

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData =  JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
            // console.log(weatherDescription);
            

            // res.send("<h1>The temperature in London is " + (temp - 273) + " degrees celciu.</h1>" + "<p>The Weather is currently " +weatherDescription +  " </p>");
            //orrr

            res.write("<p>The weather is currently " + weatherDescription+ "</p>");
            res.write("<h1>The temperature in "+query+" is " +  temp  + " degree celcius</h1>");
            res.write("<img src=" + imageURL + ">");

            res.send();


            //we can only use one res.send soo
    
            //this was easy because json was small..but what if json is not small
            
            //that extension..click on the thing you need hover copy path

            console.log(temp);
            // const object = {

            //     name : "amee",
            //     food : "panipuri"
            // }
            // console.log(JSON.stringify(object));
            //about things does ulta of what we did

            // console.log(weatherData);
        });

    });


})

// const query = "London"
//     const apikey = "b449cd0efda1f342bbffd87241f8477f"
//     const unit = "metric"
//     const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=" + apikey + "&units=" + unit;

//     https.get(url, function(response){
//         console.log(response.statusCode);

//         response.on("data", function(data){
//             const weatherData =  JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon
//             const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
//             // console.log(weatherDescription);
            

//             // res.send("<h1>The temperature in London is " + (temp - 273) + " degrees celciu.</h1>" + "<p>The Weather is currently " +weatherDescription +  " </p>");
//             //orrr

//             res.write("<p>The weather is currently " + weatherDescription+ "</p>");
//             res.write("<h1>The temperature in london is " +  (temp - 273).toFixed(2) + " degree celcius</h1>");
//             res.write("<img src=" + imageURL + ">");

//             res.send();


//             //we can only use one res.send soo
    
//             //this was easy because json was small..but what if json is not small
            
//             //that extension..click on the thing you need hover copy path

//             console.log(temp);
//             // const object = {

//             //     name : "amee",
//             //     food : "panipuri"
//             // }
//             // console.log(JSON.stringify(object));
//             //about things does ulta of what we did

//             // console.log(weatherData);
//         });

//     });


//a request thing was used earlier like we did for express sabse uppar
//but now its deprecated so

//we are not trying to get hold of the data from the api of that weather one



app.listen(8080,function(){
    console.log("Server is running on post 8080");
})