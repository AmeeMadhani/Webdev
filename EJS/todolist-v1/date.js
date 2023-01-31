// console.log(module);
//module.exports is a js object
exports.getDate = function (){

    let today = new Date();
    let options = {
        weekday : "long",
        day: "numeric",
        month:"long"
    
    };
let day = today.toLocaleDateString("en-US", options);
return day;

};



//when do you add the parenthesis in js??
//the point where you add the parenthesis means you are activating the function
//be we dont want to do that exactly here


// function getDate(){

// let today = new Date();
// let options = {
//     weekday : "long",
//     day: "numeric",
//     month:"long"

// };


exports.getDay = function (){

    let today = new Date();
    let options = {
        weekday : "long",
    
    };
    
    let day = today.toLocaleDateString("en-US", options);
    return day;
    
};

//i have no idea whyy she behind making everything shorter
//makes it more complicated


// function getDay(){

//     let today = new Date();
//     let options = {
//         weekday : "long",
    
//     };
    
//     let day = today.toLocaleDateString("en-US", options);
//     return day;
    
//     };


    console.log(module.exports)