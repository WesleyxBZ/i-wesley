import React from "react";
import "./styles.css";

interface ButtonProps {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <a href={link} className="button">
      {title}
    </a>
  );
};

export default Button;
