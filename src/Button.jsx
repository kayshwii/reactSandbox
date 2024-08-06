import React, { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);


  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    //this curried function takes the argument (color) and returns the setBackgroundColor function (a callback)
    //when returned function is called, executes setBackgroundColor(color), which updates the backgroundColor state to the specified color.
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
        //on render, set style to initial state (backgroundColor)
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          //The onClick event handler for this button is set to the returned function from the curried function
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
