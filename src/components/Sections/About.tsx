import React from "react";
import { useTheme, Text, Spacer } from "@nextui-org/react";
import StaggerText from "../Text/StaggerText";
import "./About.scss";
import SkillCarrousel from "../Global/SkillCarrousel";
import ScrollStaggerText from "../Text/ScrollStaggerText";
import InfoCard from "../About/InfoCard";

export default function About() {
  return (
    <div className="about section">
      <div className="aboutMe">
        <ScrollStaggerText
          text={"About me"}
          fontSize={100}
          fontFamily={"'Averta-Semibold', serif"}
          height={150}
          duration={1.1}
          stagger={50}
          triggerAfter={300}
          className="aboutTitle"
        />
        <Spacer />
        <ScrollStaggerText
          text={`I am a developer passionate about web development`}
          fontSize={50}
          fontFamily={"'Averta-Semibold', serif"}
          height={75}
          duration={1.1}
          wordSpacing={0}
          stagger={50}
          triggerAfter={500}
          className="aboutText"
        />
        <ScrollStaggerText
          text={`and design. I like to offer great usability and experience`}
          fontSize={50}
          fontFamily={"'Averta-Semibold', serif"}
          height={75}
          duration={1.1}
          stagger={50}
          triggerAfter={1000}
          className="aboutText"
        />
        <ScrollStaggerText
          text={`to my clients and users`}
          fontSize={50}
          fontFamily={"'Averta-Semibold', serif"}
          height={75}
          duration={1.1}
          stagger={50}
          triggerAfter={1500}
          className="aboutText"
        />
        <div className="info">
          <InfoCard
            title="UI/UX Design"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero magni
            culpa explicabo dignissimos excepturi nemo impedit beatae alias
            quibusdam perferendis."
            delay={2000}
          />
          <InfoCard
            title="Web development"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero magni
            culpa explicabo dignissimos excepturi nemo impedit beatae alias
            quibusdam perferendis."
            delay={2350}
          />
          <InfoCard
            title="Backend development"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero magni
            culpa explicabo dignissimos excepturi nemo impedit beatae alias
            quibusdam perferendis."
            delay={2700}
          />
        </div>
      </div>
    </div>
  );
}
