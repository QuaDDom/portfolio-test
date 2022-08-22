import React, { Suspense } from "react";
import { useTheme, Text } from "@nextui-org/react";
import "./Intro.scss";
import StaggerText from "../Text/StaggerText";
import { Spacer } from "@nextui-org/react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Intro() {
  return (
    <div className="intro section">
      <div className="welcome">
        <StaggerText
          text={"Hi I'm"}
          fontSize={110}
          fontFamily={"'Averta-Semibold', serif"}
          height={150}
          duration={1}
          stagger={80}
        />
        <StaggerText
          duration={1}
          stagger={80}
          text={"Mateo Leal"}
          fontSize={135}
          fontFamily={"'Averta-Semibold', serif"}
          height={150}
          stroke
          data-cursor-size={90}
          data-cursor-exclusion
          triggerAfter={1}
        />
        <Spacer y={2} />
        <StaggerText
          text={"Fullstack Web Developer"}
          fontSize={32}
          fontFamily={"'Averta-Semibold', serif"}
          height={50}
          duration={1}
          stagger={80}
          triggerAfter={0.5}
        />
        <Spacer y={3.5} />
      </div>
      <div className="effect">
        <div className="element">
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              scene="https://prod.spline.design/jUdwEAQTq3-I644Z/scene.splinecode"
              width={500}
              height={500}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
