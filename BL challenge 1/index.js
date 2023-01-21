var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1) * 6);
randomNumber1 = randomNumber1 + 1;
// console.log(randomNumber1);
var randomNumber2= Math.random();
randomNumber2 = Math.floor((randomNumber2) * 6);
randomNumber2 = randomNumber2 + 1;

var k1 = "images" + "\\dice" + randomNumber1 + ".png";
var k2 = "images" + "\\dice" + randomNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src" , k1);
document.querySelector("img.img2").setAttribute("src" , k2);

if (k1==k2){
    document.querySelector("h1").innerHTML = "Draw";
}
else if(k1>k2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";

}

