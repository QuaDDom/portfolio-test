import React from "react";
import { useTheme, Text } from "@nextui-org/react";
import ScrollStaggerText from "../Text/ScrollStaggerText";

export default function Projects() {
  return (
    <div className="projects section">
      <ScrollStaggerText
        text={"Works & Projects"}
        fontSize={80}
        fontFamily={"'Averta-Semibold', serif"}
        height={130}
        duration={1}
        stagger={50}
        triggerAfter={300}
      />
    </div>
  );
}
