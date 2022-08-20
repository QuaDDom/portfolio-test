import React from "react";
import { useTheme, Text } from "@nextui-org/react";
import "./Intro.scss";

export default function Intro() {
  return (
    <div className="intro section">
      <div className="welcome">
        <Text size={100} className={"text"}>
          Hi I'm
        </Text>
        <Text size={120} className={"text name"} data-cursor-size={90}>
          Mateo Leal
        </Text>
        <Text size={32} className={"text"}>
          Fullstack Web Developer
        </Text>
      </div>
    </div>
  );
}
