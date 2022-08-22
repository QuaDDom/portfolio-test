import React from "react";
import { useTheme, Text } from "@nextui-org/react";
import StaggerText from "../Text/StaggerText";
import "./About.scss";
import SkillCarrousel from "../Global/SkillCarrousel";
import ScrollStaggerText from "../Text/ScrollStaggerText";

export default function About() {
  return (
    <div className="about section">
      <div className="aboutMe">
        <ScrollStaggerText
          text={"About me"}
          fontSize={80}
          fontFamily={"'Averta-Semibold', serif"}
          height={125}
          duration={1.1}
          stagger={50}
          triggerAfter={300}
        />
        <ScrollStaggerText
          text={`I am a fullstack web developer passionate about`}
          fontSize={35}
          fontFamily={"'Averta-Semibold', serif"}
          height={53}
          duration={1.1}
          wordSpacing={0}
          stagger={50}
          triggerAfter={500}
          className="aboutText"
        />
        <ScrollStaggerText
          text={`design, creative websites and new technologies.`}
          fontSize={35}
          fontFamily={"'Averta-Semibold', serif"}
          height={53}
          duration={1.1}
          stagger={50}
          triggerAfter={1000}
          className="aboutText"
        />
      </div>
      <div className="skills">
        <ScrollStaggerText
          text={"Skills"}
          fontSize={80}
          fontFamily={"'Averta-Semibold', serif"}
          height={130}
          duration={1.1}
          stagger={50}
          triggerAfter={1500}
        />
        {/* <SkillCarrousel /> */}
      </div>
    </div>
  );
}
