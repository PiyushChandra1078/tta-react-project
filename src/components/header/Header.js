import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">Lorem Ipsum</div>
      <div className="header-border"></div> {/* Right-side border */}
      <div className="links">
        <a href="#footer">Link 1</a>
      </div>
    </header>
  );
};

export default Header;
