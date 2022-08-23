import React, { useState } from "react";
import { Text } from "@nextui-org/react";
import "./InfoCard.scss";
import useOnView from "react-useonview";

interface Props {
  title: string;
  description: string;
  delay: number;
}

export default function InfoCard({ title, description, delay }: Props) {
  const [visible, setVisible] = useState(false);
  const trigger = useOnView(() =>
    setTimeout(() => {
      setVisible(true);
    }, delay)
  );

  return (
    <div className="infoCard" ref={trigger}>
      <Text
        size={35}
        className={`title ${visible && "visible"}`}
        data-cursor-exclusion
        data-cursor-size={35}
      >
        {title}
      </Text>
      <Text
        size={20}
        className={`description ${visible && "visible"}`}
        data-cursor-exclusion
        data-cursor-size={20}
      >
        {description}
      </Text>
    </div>
  );
}
