$("h1").css("color", "red");
// or jQuery("h1").css("color", "red");

// to avoid any unncessary placement and calling of stuff due to placement of script tag in html file we use a ready method and then callback the function requireed

// $(document).ready(function(){ 
//     //now making this ready function and all does the same thing as placing the script tag at the end of the body tag
    
//     $("h1").css("color", "red");
// });

//minify.org way to converting your js or css code into a minified version

// document.querySelector("h1");
$("h1"); //jQuery vrsion of the same thing written above

// document.querySelectorAll("button");
$("button"); //jQuery version of the above as well

//no difference betweeen one and all
 
$("h1").css("color", "green");
console.log($("h1").css("color"));

$("h1").addClass("big_title margin-50");
//there might be overriding due to multiple sentences

//to remove 
// $("h1").removeClass("big_title");

//to see if it has a class returns bool
// $("h1").hasClass("margin-50");

//to change text
$("h1").text("Bye")

$("button").text("Dont click me!");

//shortform for innerHTML 
$("button").html("<em>Hey</em>");

// and not 
// $("button").html("<em>Hey</em>");
// because u cannot use html i.e tags then

//USE DOCUMENTATION

//knowing vanilla js is important to know the importance of jquery and other libraries
//and sometimes even understand the working and errors coming well

//manipulate attributes using jQuery
//getting
console.log($("img").attr("src"));

//setting the value of attribute
//if there is a second input then it is settin the value, if there isnt then it is simply getting the value
// $("a").attr("href", "http://www.yahoo.com");

//adding eventlistener
$("h1").click(function(){
    $("h1").css("color", "purple" )
});

 
//using vanilla js it was like this for giving an el to all the buttons
// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

//same thing using jQuery

$("button").click(function() {
    $("h1").css("color", "purple");
});

//this keydown thing is used with event mostly and event.key is used to know the key on which the event occured
$("input").keydown(function(event){
    console.log(event.key);
});

//putting body or document in place of input above..evertthing you type on the website will be logged

//.html and .text both work 
$(document).keypress(function(event){
    $("h1").html(event.key);
});

//instead of .keypress or .click there is a more efficient way
 $("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
 }); 

//adding elements using jQuery
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");

//removing all the element
// $("button").remove();

//animations 
// $("button").on("click", function(){
//     $("h1").toggle();
// });

$("button").on("click", function(){
    $("h1").fadeToggle();
});

//ohh toggle in and out are in almost all of them
//slideUp(), slideDown(), slideToggle(), 

// $("button").show();

//custom css 
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});
});

//inside .animate you can only add numeric css not color or something alphabetic and all..only numeric


//now the thing you were trying to do
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});










