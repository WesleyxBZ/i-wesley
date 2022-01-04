import React, { useState } from "react";

import "./styles.css";
import imageOne from "./../../images/gallery/1.jpg";
import imageTwo from "./../../images/gallery/2.jpg";
import imageTree from "./../../images/gallery/3.jpg";
import Card from "./card";

interface Image {
  title: string;
  path: string;
}

const Gallery = () => {
  const [images] = useState<Image[]>([
    {
      title: "Balão de ar em um céu azul",
      path: imageOne,
    },
    {
      title: "Paisagem com montanha ao fundo",
      path: imageTwo,
    },
    {
      title: "Vista da cidade em preto e branco",
      path: imageTree,
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
        <div className="container-box mt-3">
          {images.map((image: Image, index: number) => {
            return <Card key={index} title={image.title} path={image.path} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
