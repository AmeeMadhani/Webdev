alert("Hello");
alert("World");

//mdn web docs -> javascript 
typeof(2);

var yourname = prompt("what is your name?");

var myname = "Amee";

alert("My name is " + myname + ". " + "Hello, " + yourname );

var gamelevel = 1;
gamelevel = 2;
gamelevel = 3;
alert("current game level " + gamelevel);

console.log("amee");

var tweet = prompt("compose your tweet: ");
var tweetcount = tweet.length;
alert("you have written " + tweetcount + " characters, you have " + (140 - tweetcount) + " characters remaining.");
var tweetunder140 = tweet.slice(0,140);
alert(tweetunder140);

var name2 = "amee";
var k = name2.slice(0,1);

var name3 = "Amee";
name3.toUpperCase();
name3.toLowerCase();

var ok = prompt("What is your name? ")
var bk = ok.slice(0,1).toUpperCase();

alert(bk+ok.slice(1,ok.length));

//modulo - remainder 

var dogage = prompt("what is the age of your dog?");
alert("Your dog's human age is " + (((dogage - 2) * 4) + 21)); 

//functions

function getMilk(){
    console.log("leave house");
    console.log("getmilk_lol");
    console.log("comeback");
}


//accepting inputs 
//bottles is not a mandatory input that needs to be given while calling the function

function getMilk2(bottles){
    console.log("leave house");
    console.log("get " + bottles + " of milk");
    console.log("comeback");

}

function getmilk4(money){
    console.log("leave house");
    console.log("turn right");
    console.log("turn left");
    console.log("buy" + Math.floor(money/1.5) + "bottles of milk");
    console.log("some more conditions to reach home");

}

function lifeInWeeks(age) {
    
        var a = 90-age;
        var days = a*365;
        var weeks = a*52;
        var months = a*12;
        console.log("You have " +  days+ " days, " + weeks + " weeks, and " + months + " months left.")
        
    }
    

//able to give output

function getmilk3(money){
   
    console.log("leave house");
    console.log("turn right");
    console.log("turn left");
    console.log("buy" + Math.floor(money/1.5) + "bottles of milk");
    console.log("some more conditions to reach home");
    
    return money % 1.5;
}

var change = getmilk3(4);
console.log(change);

//using functions inside functions
function getmilk3(money){
   
    console.log("leave house");
    console.log("turn right");
    console.log("turn left");
    console.log("buy" + calcBottles(money, 1.5) + "bottles of milk");
    console.log("some more conditions to reach home");
    
    return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle){
    var numberofbottles = Math.floor(startingMoney / costPerBottle);
    return numberofbottles;
}

function calcChange(startingAmount,costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}

getmilk3(4)

//ok bmi challege..i am not doing it sorry..i know how to..now i realise its fun to learn something new but not revising and doing what u know already. but then u forget and u realise oh now u have to revise. 


