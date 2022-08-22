import React from "react";
import Project from "./Project";
import "./ViewProjects.scss";

export default function ViewProjects() {
  return (
    <div className="projectGrid">
      <Project img="./projects/snow.png" title="" />
      <Project img="./projects/cpm.png" title="" />
      <Project img="./projects/skewscroll.png" title="" />
      <Project img="./projects/threejs.png" title="" />
    </div>
  );
}
