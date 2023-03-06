import React from "react";
import ReactDOM from "react-dom";
// import pi from "./math"
import pie, {doublePi, triplePi} from "./math"


ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);