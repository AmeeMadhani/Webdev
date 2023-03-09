import React, { useState } from "react";



function App(){
  const [headingText, setHeadingText] = useState("hello");
  const [isMousedOver, setMouseOver] = useState(false);
  function handleClick(){
    // console.log("clicked");
    setHeadingText("submitted")
  }

  function handleMouseOver(){
    setMouseOver(true);

    // console.log("Moused over");
  }

  function handleMouseOut(){
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style ={{backgroundColor: isMousedOver ? "black" : "white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
