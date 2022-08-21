import React from "react";
import "./Menu.scss";
import { useTheme, Text, Switch } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

interface Props {
  isOpen: boolean;
}

export default function Menu({ isOpen }: Props) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div className={`menuContainer ${isOpen && "open"}`}>
      <div className={`menu ${isOpen && "open"}`}>
        <div className="social">
          <Text size={15}>Github</Text>
          <Text size={15}>Twitter</Text>
          <Text size={15}>Instagram</Text>
          <Switch
            data-cursor-size="60px"
            checked={isDark}
            color={"primary"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            data-cursor-exlusion
          />
        </div>
        <div className="options">
          <Text size={65} data-cursor-size={60} data-cursor-exclusion>
            About
          </Text>
          <Text size={65} data-cursor-size={60} data-cursor-exclusion>
            Intro
          </Text>
          <Text size={65} data-cursor-size={60} data-cursor-exclusion>
            Projects
          </Text>
        </div>
        <div className="contactEmail"></div>
      </div>
      <div className={`transitionBg ${isOpen && "open"}`} />
    </div>
  );
}
