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






