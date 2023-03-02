import React from "react";
import ReactDOM from "react-dom";


const name = "Amee";
const lastName = "Madhani";
const num = 7;
ReactDOM.render(
<div>
  {/* <h1>Hello {name + " " +lastName}.</h1> */}
  {/* <p>Your lucky number is {3+4}</p> */}
  <h1>Hello {`${name} ${lastName}`}.</h1>
  
  <p>Your lucky number is {Math.floor(Math.random()*10)}</p>

</div>, 
  document.getElementById("root"));

