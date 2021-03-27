import React, { useState } from "react";

import "./styles.css";
import imageOne from "./../../images/gallery/1.jpg";
import imageTwo from "./../../images/gallery/2.jpg";
import imageTree from "./../../images/gallery/3.jpg";
import Card from "./card";

interface Image {
  title: string;
  path: string;
  spotifyLink: string;
}

const Gallery = () => {
  const [images] = useState<Image[]>([
    {
      title: "Sem medo - Mahmundi",
      path: imageOne,
      spotifyLink:
        "https://open.spotify.com/track/31YDFOH4f9fOhF0CGWEFds?si=mHevpPPWSv-Ikz989EH7sA",
    },
    {
      title: "King - Years & Years",
      path: imageTwo,
      spotifyLink:
        "https://open.spotify.com/track/3AeicLnm55RqcXGBKYQolM?si=-X6e11REQ-OhXjTTMv--iQ",
    },
    {
      title: "Lights - Ellie Goulding",
      path: imageTree,
      spotifyLink:
        "https://open.spotify.com/track/5aTsxlQlq0vIedDWZoqMWN?si=LBUJxJRoRgiwehXtG4tfaw",
    },
  ]);

  return (
    <div id="galeria">
      <div className="gallery-blankspace"></div>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-light text-center">Galeria</h1>
            </div>
          </div>
        </div>
        <div className="container-box">
          {images.map((image: Image, index: number) => {
            return (
              <Card
                key={index}
                title={image.title}
                path={image.path}
                spotifyLink={image.spotifyLink}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
