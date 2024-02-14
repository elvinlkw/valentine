import "./App.css";
import { useState } from "react";

function App() {
  const handleMouseOver = () => {
    document.querySelector("#no-btn").remove();

    let myDiv = document.querySelector("body");
    // creating button element
    let button = document.createElement("button");
    button.id = "no-btn";
    button.style.position = "absolute";
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;
    button.style.top = `${randomTop}vh`;
    button.style.left = `${randomLeft}vw`;
    button.classList.add("btn");
    button.classList.add("btn-secondary");
    let text = document.createTextNode("No");

    // appending text to button
    button.appendChild(text);
    myDiv.appendChild(button);

    button.addEventListener("mouseover", function () {
      handleMouseOver();
    });
  };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {isClicked ? (
            <h1>Great!</h1>
          ) : (
            <>
              <h1>Mary Jane</h1>
              <h1>Do you wanna be my valentine?</h1>
            </>
          )}
          {!isClicked && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    setIsClicked(true);
                    document.querySelector("#no-btn").remove();
                  }}
                >
                  Yes
                </button>
                <button
                  id="no-btn"
                  class="btn btn-secondary"
                  onMouseOver={handleMouseOver}
                  onClick={handleMouseOver}
                >
                  No
                </button>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
