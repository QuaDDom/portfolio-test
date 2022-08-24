import React from "react";
import "./Input.scss";

interface Props {
  placeholder: string;
  type: string;
  value: string;
  setValue: any;
}

export default function Input({ placeholder, type, value, setValue }: Props) {
  return <div>Input</div>;
}
