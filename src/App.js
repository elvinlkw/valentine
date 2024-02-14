import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const handleMouseOver = () => {
    document.querySelector("#no-btn").remove();

    let myDiv = document.querySelector("body");
    // creating button element
    let button = document.createElement("button");
    button.id = "no-btn";
    button.style.position = "absolute";

    const thresh = isMobile ? 80 : 100;
    const randomTop = Math.random() * thresh;
    const randomLeft = Math.random() * thresh;
    button.style.top = `${randomTop}vh`;
    button.style.left = `${randomLeft}vw`;
    button.classList.add("btn");
    button.classList.add("btn-secondary");
    let text = document.createTextNode("No!");

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
                  className="btn btn-primary"
                  onClick={() => {
                    setIsClicked(true);
                    document.querySelector("#no-btn").remove();
                  }}
                >
                  Yes
                </button>
                <button
                  id="no-btn"
                  className="btn btn-secondary"
                  onMouseOver={handleMouseOver}
                  onClick={handleMouseOver}
                >
                  No!
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
