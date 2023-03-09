import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date(2019, 11,1,18).getHours();
console.log(currentTime);

// function renderConditionally(){
//   isLoggedIn ? <h1>Hello</h1> : <Login />
//   }

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {/* {currentTime>12?<h1>Why are you still working?</h1> : null} */}
      {currentTime>12&&<h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
