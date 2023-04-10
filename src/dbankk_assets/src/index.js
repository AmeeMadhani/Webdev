import { dbankk } from "../../declarations/dbankk";

window.addEventListener("load", async function(){
    // console.log("finished. skdfhad;kj")
    update();

}); 

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();
    // console.log("submitted");

    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute('disabled', true);

    if (document.getElementById("input-amount").value.length != 0){
        await dbankk.topUp(inputAmount);

    }

    if (document.getElementById("withdrawal-amount").value.length != 0){
        await dbankk.withdrawl(outputAmount);
    }

    await dbankk.compound();
    
    update();

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";
    button.removeAttribute("disabled");

});

async function update(){
    const currentAmount = await dbankk.checkBalance();
    document.getElementById("value").innerHTML = Math.round(currentAmount * 100)/100;
}

