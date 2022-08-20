import React from "react";
import "./Menu.scss";
import { useTheme, Text } from "@nextui-org/react";

interface Props {
  isOpen: boolean;
}

export default function Menu({ isOpen }: Props) {
  return (
    <div className={`menuContainer ${isOpen && "open"}`}>
      <div className={`menu ${isOpen && "open"}`}>
        <div className="social">
          <Text size={15}>Github</Text>
          <Text size={15}>Twitter</Text>
          <Text size={15}>Instagram</Text>
        </div>
        <div className="options">
          <Text size={65} data-cursor-size={90} data-cursor-exclusion>
            About
          </Text>
          <Text size={65} data-cursor-size={90} data-cursor-exclusion>
            Intro
          </Text>
          <Text size={65} data-cursor-size={90} data-cursor-exclusion>
            Projects
          </Text>
        </div>
        <div className="contactEmail"></div>
      </div>
      <div className={`transitionBg ${isOpen && "open"}`} />
    </div>
  );
}
