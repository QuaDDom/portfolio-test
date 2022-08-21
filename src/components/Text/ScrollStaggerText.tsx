import React, { useState } from "react";
import { useTheme, Text } from "@nextui-org/react";
import useOnView from "react-useonview";
import "./ScrollStaggerText.scss";
import StaggerTextReveal from "./StaggerText";

export default function ScrollStaggerText({ ...props }: any) {
  const [visible, setVisible] = useState(false);
  const trigger = useOnView(() => setVisible(true));

  return (
    <div className="animatedText" ref={trigger}>
      {visible && <StaggerTextReveal {...props} />}
    </div>
  );
}
