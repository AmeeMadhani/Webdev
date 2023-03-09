import React, {useState} from "react";

function App(){
  const [count, setCount] = useState(0);

  // const rgb = [9 132,227]
  // const [red,green,blue] = [9,132,227];
  // console.log(state);
  function increase(){
    setCount(count+1)
  // count++;
  }

  function decrease(){
    setCount(count-1)
  }


  return (
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
  )

}


export default App;
