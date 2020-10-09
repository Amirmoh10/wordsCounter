/** @format */

import React from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = React.useState("");
  let filteredInput;
  let wordsCount = 0,
    charCount = 0,
    charNoSpaceCount = 0;
  if (userInput.length === 0) {
    wordsCount = 0;
  } else {
    let delimeter = /\s+/gi;
    filteredInput = userInput
      .trim()
      .split(delimeter)
      .filter((word) => word.length !== 0);
    wordsCount = filteredInput.length;
    charCount = userInput.trim().length;
    charNoSpaceCount = userInput.replace(delimeter, "").length;
  }

  return (
    <div className="App">
      <div className="header">
        <div className="title_1">
          <p>Word Count</p>
        </div>
        <div className="sub-title">
          <p>A simple and free word counter</p>
        </div>
      </div>
      <div className="countersInputContainer">
        <div className="counters">
          <div className="words">
            <p>{wordsCount}</p>
            <p>Words</p>
          </div>

          <div className="characters">
            <p>{charCount}</p>
            <p>Characters</p>
          </div>

          <div className="charExSpaces">
            <p>{charNoSpaceCount}</p>
            <p>Charecters Excluding Spaces</p>
          </div>
        </div>

        <div className="input-container">
          <textarea
            className="input"
            value={userInput}
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
