import React from "react";
import { Text } from "@nextui-org/react";
import "./HorizontalText.scss";

export default function HorizontalText({ children, ...props }: any) {
  return (
    <div className="horizontalText">
      <Text {...props}>{children}</Text>
    </div>
  );
}
