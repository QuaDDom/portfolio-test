import React from "react";
import { useTheme, Text } from "@nextui-org/react";
import "./Intro.scss";
import StaggerText from "../Text/StaggerText";

export default function Intro() {
  return (
    <div className="intro section">
      <div className="welcome">
        <StaggerText
          text={"Hi I'm"}
          fontSize={100}
          fontFamily={"'Averta-Semibold', serif"}
          height={140}
          duration={1}
          stagger={80}
        />
        <StaggerText
          duration={1}
          stagger={80}
          text={"Mateo Leal"}
          fontSize={120}
          fontFamily={"'Averta-Semibold', serif"}
          height={140}
          stroke
          data-cursor-size={90}
          data-cursor-exclusion
          triggerAfter={1}
        />

        <StaggerText
          text={"Fullstack Web Developer"}
          fontSize={32}
          fontFamily={"'Averta-Semibold', serif"}
          height={50}
          duration={1}
          stagger={80}
          triggerAfter={3}
        />
      </div>
    </div>
  );
}
