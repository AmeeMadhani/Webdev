//randomisation

var n = Math.random(); //gives number from 0 - 0.9999999999999999999 (16 9s)
n = n*6; //we need between 1 and 6 so 6 
n = Math.floor(n) +1; //round to nearest whole number which results in 0-5 ranged random number and add 1 to make then range 1-6
console.log(n);

//love cakculator
//takes two input and does not give two hoots about it and gives a random percent

prompt("what is your name?");
prompt("what is your lovers name?");
var n = Math.random()* 100;
n = Math.floor(n) + 1;
// alert("your love percentage is " + n + "%" );

//if else
//comparators
//=== checks data types too
//== only checks the value
//&& qnd
// || or
if (n > 90){
    alert("Damn " + n + "%, same marks would be better");
}
if (n > 30 && n <= 90){
    alert("Oh" + n + "%, nvm!");
}
if(n <= 30){
    alert("bruh u better break up " + n + "%");
}

//bmi if else
function bmiCalculator(weight,height) {

    var bmi = Math.round(weight / Math.pow(height,2));
    var interpretation;
    
    if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
}

if (bmi >= 18.5 && bmi < 24.9) {
    interpretation ="Your BMI is " + bmi + ", so you have a normal weight.";
}

if (bmi >= 25) {
    interpretation ="Your BMI is " + bmi + ", so you are overweight.";
} 
   return interpretation;
}

//leap year challenge

var k = prompt("what is the year that you want to check?");
function isLeap(year){
    if (year%4==0){
        if(year%100==0){
            if(year%400==0){
                return "Leap year.";
            }else{
                return "Not leap year.";
            }
        }else{
            return "Leap year.";
        }

    } else{
        return "Not leap year.";
    }
}
isLeap(k);

//collection data type : array

var guestlist = ["Amee", "Sassmit", "Jack", "Pan", "James"];
console.log(guestlist.length);
// guestlist[0];
var guest = prompt("what is you name?");
if(guestlist.includes(guest)){
    alert("Welcome")
}else{
    alert("Sorry")
};

//jokeee
//why did the programmer quit his job?
//because he did not get arrays
//dhugdhugdhunn

var output = [];
var i =1;
function fizbuzz(){

    output.push(i);
    
    if (i%5 ==0 && i%3==0){
         output.push("fizbuzz");
    }
    
    else if(i%3 ==0){
        output.push("fiz")
    }
    else if(i%5 ==0){
        output.push("buzz")
    }
    else{
        output.push(i)
    }
   
    i++;
    return output;
    
}

//whos buying lunch challenge
function whosPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buying lunch today!";
}

//while loops
var output = [];
var i =1;
function fizbuzz(){

    while(i<=100){
    if (i%5 ==0 && i%3==0){
         output.push("fizbuzz");
    }
    
    else if(i%3 ==0){
        output.push("fiz")
    }
    else if(i%5 ==0){
        output.push("buzz")
    }
    else{
        output.push(i)
    }
   
    i++;
    }
    console.log(output);  
}

//99 bottles challenge
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


//for loops
var output = [];

function fizbuzz(){

    for(var i =1;i<=100;i++){
    if (i%5 ==0 && i%3==0){
         output.push("fizbuzz");
    }
    
    else if(i%3 ==0){
        output.push("fiz")
    }
    else if(i%5 ==0){
        output.push("buzz")
    }
    else{
        output.push(i)
    }

    }
    console.log(output);  
}

//fibonacci challenge

function fibonacciGenerator(n){
    var output = [];
    if(n==1){
        output = [0];
    }
    else if(n==2){
        output = [0,1];
    }
    else{
        output = [0,1];
        for (var i = 2; i<n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
        }
    return output;
}









