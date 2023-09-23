import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="container">
        <p>
          Your text content goes here in the Center verticaly and horizontally.
        </p>
      </div>
      <div className="center-line"></div> {/* Center line */}
      <div className="container">
        <p></p>
      </div>
    </main>
  );
};

export default Main;
