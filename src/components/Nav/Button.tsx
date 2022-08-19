import React from "react";
import "./Button.scss";

interface Props {
  handleClick: () => void;
  isOpen: boolean;
}

export default function Button({ handleClick, isOpen }: Props) {
  return (
    <div
      className="menuBtn"
      onClick={handleClick}
      data-cursor-stick="#stick-item"
    >
      <div
        className={isOpen ? "open" : ""}
        data-cursor-size={70}
        id="stick-item"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
