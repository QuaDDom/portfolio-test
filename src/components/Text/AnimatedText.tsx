import React from "react";
import { useTheme, Text } from "@nextui-org/react";

export default function AnimatedText({ children, ...otherProps }: any) {
  return (
    <div className="animatedText">
      <Text {...otherProps}>{children}</Text>
    </div>
  );
}
