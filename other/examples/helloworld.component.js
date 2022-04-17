import React from "react";
import "./helloworld.component.css";

function changeColor() {
  document.getElementById("hello-world").style.color = "green";
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="hello-world">
        <h1>Hello World</h1>
        <button onClick={changeColor()}>Click Me!</button>
      </div>
    );
  }
}
