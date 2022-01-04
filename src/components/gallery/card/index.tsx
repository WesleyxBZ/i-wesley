import React from "react";

import "./styles.css";

interface Image {
  title: string;
  path: string;
}

const Card: React.FC<Image> = ({ title, path }: Image) => {
  return (
    <div className="box mx-3">
      <img src={path} alt={title} />
    </div>
  );
};

export default Card;
