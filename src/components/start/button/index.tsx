import React from "react";
import "./styles.css";

interface ButtonProps {
  type: string;
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ type, title, link }) => {
  return (
    <a href={link} className={type + " button"}>
      {title}
    </a>
  );
};

export default Button;
