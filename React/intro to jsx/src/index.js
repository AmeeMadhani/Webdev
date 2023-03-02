// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

//this is what babel did bts
// var h1 = document.createElement("h1");
// h1.innerHTML = "pretending";
// document.getElementById("root").appendChild(h1);

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
