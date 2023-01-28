import React, { useState } from "react";

import "./styles.css";
import imageOne from "./../../images/gallery/1.jpg";
import imageTwo from "./../../images/gallery/2.jpg";
import imageTree from "./../../images/gallery/3.jpg";

interface Image {
  title: string;
  path: string;
  link: string;
}

const Cases = () => {
  const [images] = useState<Image[]>([
    {
      title: "Design thinking: helping freshmen and seniors during their journey through the Internet Systems course/UFSM",
      path: imageOne,
      link: "https://wesleyxbz.medium.com/design-thinking-ajudando-calouros-e-veteranos-durante-sua-jornada-pelo-curso-de-sistemas-para-6982ea0fc707"
    },
    {
      title: "There you have it - Helping users with grocery shopping and product organization",
      path: imageTwo,
      link: "https://wesleyxbz.medium.com/tem-a%C3%AD-auxiliando-usu%C3%A1rios-com-compras-de-supermercado-e-organiza%C3%A7%C3%A3o-de-produtos-662188a846e"
    },
    {
      title: "Campos Higienização branding",
      path: imageTree,
      link: "https://www.behance.net/gallery/143361093/Campos-Higienizacao-Branding"
    },
  ]);

  return (
    <>
      <div className="blankspace"></div>
      <div id="cases">
        <section className="mb-5 align-self-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="heading text-light text-center mb-4">Cases</h1>
              </div>
            </div>
          </div>
          <div className="container-box">
            {images.map((image: Image, index: number) => {
              return (               
                  <a 
                    key={index}        
                    title={image.title}          
                    href={image.link}
                    target="_blank"
                    rel="noreferrer"
                    className="box mx-3">
                    <img src={image.path} alt={image.title} />
                  </a>             
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Cases;
