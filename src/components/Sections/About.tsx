import React from "react";
import { useTheme, Text } from "@nextui-org/react";
import StaggerText from "../Text/StaggerText";
import "./About.scss";
import SkillCarrousel from "../Global/SkillCarrousel";

export default function About() {
  return (
    <div className="about section">
      <div className="aboutMe">
        <StaggerText
          text={"About me"}
          fontSize={80}
          fontFamily={"'Averta-Semibold', serif"}
          height={150}
          duration={1}
          stagger={80}
        />
        <Text size={35} className="aboutText">
          I am a fullstack web developer passionate about design, creative
          websites and new technologies.
        </Text>
      </div>
      <div className="skills">
        <StaggerText
          text={"Skills"}
          fontSize={80}
          fontFamily={"'Averta-Semibold', serif"}
          height={150}
          duration={1}
          stagger={80}
        />
        {/* <SkillCarrousel /> */}
      </div>
    </div>
  );
}
