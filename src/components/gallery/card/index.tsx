import React from "react";

import "./styles.css";

interface Image {
  title: string;
  path: string;
  spotifyLink: string;
}

const Card: React.FC<Image> = ({ title, path, spotifyLink }: Image) => {
  return (
    <div className="box mx-3">
      <img className="card-img-rounded" src={path} alt={title} />
      <span>
        <a
          className="card-link"
          href={spotifyLink}
          target="_blank"
          rel="noreferrer"
        >
          ♫ {title}
        </a>
      </span>
    </div>
  );
};

export default Card;
