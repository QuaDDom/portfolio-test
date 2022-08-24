import React from "react";
import { useTheme, Text } from "@nextui-org/react";
import ScrollStaggerText from "../Text/ScrollStaggerText";
import ViewProjects from "../Projects/ViewProjects";
import "./Projects.scss";

export default function Projects() {
  return (
    <div className="projects section" style={{ height: "120vh" }}>
      <ScrollStaggerText
        text={"Works & Projects"}
        fontSize={100}
        fontFamily={"'Averta-Semibold', serif"}
        height={150}
        duration={1}
        stagger={50}
        triggerAfter={300}
      />
      <ViewProjects />
    </div>
  );
}
