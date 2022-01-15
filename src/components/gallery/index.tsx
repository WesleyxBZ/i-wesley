import React, { useState } from "react";

import "./styles.css";
import imageOne from "./../../images/gallery/1.jpg";
import imageTwo from "./../../images/gallery/2.jpg";
import imageTree from "./../../images/gallery/3.jpg";

interface Image {
  title: string;
  path: string;
}

const Gallery = () => {
  const [images] = useState<Image[]>([
    {
      title: "Air balloon in a blue sky",
      path: imageOne,
    },
    {
      title: "Landscape with mountains in the background",
      path: imageTwo,
    },
    {
      title: "Cityscape in black and white",
      path: imageTree,
    },
  ]);

  return (
    <>
      <div className="blankspace"></div>
      <div id="gallery">
        <section className="mb-5 align-self-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="heading text-light text-center">Galeria</h1>
              </div>
            </div>
          </div>
          <div className="container-box">
            {images.map((image: Image, index: number) => {
              return (
                <div className="box mx-3" key={index}>
                  <img src={image.path} alt={image.title} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
