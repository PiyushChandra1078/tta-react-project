import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="Fcontainer-left">
        <p>Your footer content which is Aligned left</p>
      </div>
      <div className="Fcontainer-right">{/* Leave this container empty */}</div>
    </footer>
  );
};

export default Footer;
