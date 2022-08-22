import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div
      className="footerContainer"
      style={{ background: "$primary" }}
      data-cursor-exclusion
    >
      <div className="footer">
        <div className="logo">
          <p>Mateo Leal</p>
        </div>
        <div className="sayhi"></div>
        <div className="contactMe"></div>
      </div>
    </div>
  );
}
