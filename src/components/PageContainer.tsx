import React from "react";
import Footer from "./Footer";
import About from "./Sections/About";
import Intro from "./Sections/Intro";
import Projects from "./Sections/Projects";
import { Cursor } from "react-creative-cursor";
import { ScrollerMotion } from "scroller-motion";
import { useTheme } from "@nextui-org/react";
import "./PageContainer.scss";
import Nav from "./Nav/Nav";
import Contact from "./Sections/Contact";

export default function PageContainer() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Cursor
        isGelly={true}
        cursorBackgrounColor={isDark ? "#fff" : "#000"}
        cursorInnerColor={"#ffffff"}
        cursorSize={23}
        animationDuration={0.8}
        sizeAnimationDuration={1.5}
      />
      <main className="mainContainer">
        <Nav />
        <ScrollerMotion>
          <Intro />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </ScrollerMotion>
      </main>
    </>
  );
}
