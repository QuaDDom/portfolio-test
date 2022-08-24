import React, { Suspense } from "react";
import { useTheme, Text } from "@nextui-org/react";
import "./Intro.scss";
import StaggerText from "../Text/StaggerText";
import { Spacer } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";

export default function Intro() {
  return (
    <div className="intro section">
      <div className="welcome">
        <StaggerText
          text={"Hi I'm"}
          fontSize={110}
          fontFamily={"'Averta-Semibold', serif"}
          height={150}
          duration={1.2}
          stagger={50}
        />
        <StaggerText
          duration={1.2}
          stagger={50}
          text={"Mateo Leal"}
          fontSize={135}
          fontFamily={"'Averta-Semibold', serif"}
          height={150}
          stroke
          data-cursor-size={90}
          data-cursor-exclusion
          triggerAfter={500}
        />
        <Spacer y={2} />
        <StaggerText
          text={"Web Developer & UI/UX Designer"}
          fontSize={32}
          fontFamily={"'Averta-Semibold', serif"}
          height={50}
          duration={1.2}
          stagger={50}
          triggerAfter={1000}
        />
        <Spacer y={3.5} />
      </div>
      <div className="effect">
        <div className="element">
          <Spline
            scene="https://prod.spline.design/jUdwEAQTq3-I644Z/scene.splinecode"
            width={500}
            height={500}
            className="splineModel"
          />
        </div>
      </div>
    </div>
  );
}
