import React from "react";
import { ButtonProps } from "@/interfaces";

const Button = ({ title, styles }: ButtonProps) => {
  return (
    <button className={`flex justify-center items-center ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
