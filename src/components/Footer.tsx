import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footerContainer" style={{ background: "$primary" }}>
      <div className="footer">
        <div className="logo"></div>
        <div className="sayhi"></div>
        <div className="contactMe"></div>
      </div>
    </div>
  );
}
