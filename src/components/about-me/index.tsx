import React from "react";

import "./styles.css";
import walkInTheCity from "./../../images/walk-in-the-city.svg";

const AboutMe = () => {
  return (
    <section id="sobre-mim" className="container about-me">
      <div className="align-self-center">
        <div className="row">
          <div className="col-md-12 col-lg-6 hide-in-mobile my-3">
            <img
              className="img-fluid mt-4"
              src={walkInTheCity}
              alt="imagem caminhando na cidade"
              height="338"
            />
          </div>
          <div className="col-md-12 col-lg-6">
            <h1 className="heading">Sobre mim</h1>
            <p className="mt-4">
              Nasci e resido atualmente na cidade de Santa Maria/RS. Sou
              graduando em Sistemas para Internet pela Universidade Federal de
              Santa Maria (UFSM).
              <br />
              Sou fascinado por novas tecnologias, apaixonado por música e gosto
              de ler e assitir filmes LGBT+.
              <br />
              <br />
              <i>"Pés no chão e olhar no horizonte!"</i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
