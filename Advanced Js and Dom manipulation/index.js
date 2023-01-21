// document.querySelector("button").addEventListener("click", handleClick);
// //adding parenthesis to the funciton is straightup function call..as soon as you load the page it will be called as it is no the topmost section of the js file

// // find alot such on mdn docs syntax

// function handleClick(){
//     alert("kldhfkl");
// }


//adding eventlistener to all buttons
for (var i=0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // 'this' will give you whatever element u clicked
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    }); 
}

//detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(buttonInnerHtml);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio1 = new Audio("sounds\\tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sounds\\tom-2.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds\\tom-3.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sounds\\tom-4.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sounds\\crash.mp3");
            audio5.play();
            break;
              
        case "k":
            var audio6 = new Audio("sounds\\kick-bass.mp3");
            audio6.play();
            break;

        case "l":
            var audio6 = new Audio("sounds\\snare.mp3");
            audio6.play();
            break;

        default: console.log(buttonInnerHtml);

    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}

// i might want to look at section 13 some more times








//mdn docs again for audio and things

// anonymours function are also used like so
//but i dont get the parenthesis concept now...will just let it go ig for now

//some cool js things 
// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }

// calculator(4,5, add);
// calculator(4,5,multiply);
// debugger;
// calculator


//var housekeeper1  = {
    // yearsOfExp = 12;
    // name = "amee";
    //cleaningRepertoire: ["lobby", "dishes"]
// }

//housekeeper1;

//constructor function
// function BellBoy(name, age, hasworkpermit, lang){
//     this.name = name;
//     this.age = age;
//     this.hasworkpermit = hasworkpermit;
//     this.lang = lang;
// }

// //initialize object
// var bellboy1 = new BellBoy("Timmy", 19, true, ["french", "english"]);
// var bellboy2 = new BellBoy("Amee", 19, true, ["french", "english"]);

