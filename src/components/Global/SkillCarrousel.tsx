import React from "react";

import { Button, Text, Image } from "@nextui-org/react";
import "./SkillCarrousel.scss";

export default function SkillCarrousel() {
  return (
    <div className="scrollSeparator">
      <div className="wordsContainer">
        <div className="wordSeparator">
          <div className="word">
            <Image
              width={90}
              height={90}
              src="./skills/react.png"
              alt="Default Image"
              objectFit="cover"
            />
            <Image
              width={90}
              height={90}
              src="./skills/react.png"
              alt="Default Image"
              objectFit="cover"
            />
            <Image
              width={90}
              height={90}
              src="./skills/react.png"
              alt="Default Image"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="wordSeparator">
          <div className="word">
            <Image
              width={90}
              height={90}
              src="./skills/react.png"
              alt="Default Image"
              objectFit="cover"
            />
            <Image
              width={90}
              height={90}
              src="./skills/react.png"
              alt="Default Image"
              objectFit="cover"
            />
            <Image
              width={90}
              height={90}
              src="./skills/react.png"
              alt="Default Image"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
