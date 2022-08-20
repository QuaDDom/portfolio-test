import React from "react";
import "./Button.scss";

interface Props {
  handleClick: () => void;
  isOpen: boolean;
}

export default function Button({ handleClick, isOpen }: Props) {
  return (
    <div className="menuBtn" onClick={handleClick} data-cursor-exclusion>
      <div className={isOpen ? "open" : ""} data-cursor-size={70}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
