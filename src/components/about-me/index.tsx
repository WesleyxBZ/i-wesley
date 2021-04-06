import React from "react";

import "./styles.css";
import walkInTheCity from "./../../images/walk-in-the-city.svg";

const AboutMe = () => {
  return (
    <section id="sobre-mim" className="container aboutme">
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
            <h1>Sobre mim</h1>
            <p>
              💻 <strong>{"</>"}</strong> 🎵 🌈
            </p>
            <p className="mt-5">
              Nasci na cidade de Santa Maria/RS, chamada de "o coração do RS",
              onde resido atualmente. Sou graduando em Sistemas para Internet
              pela Universidade Federal de Santa Maria (UFSM).
              <br />
              Sou fascinado por novas tecnologias e amo música. Estou em
              constante aprendizado nesse mundo enorme, sou apenas um gafanhoto
              saindo para o mundo em um mar de estrelas. O que o futuro me
              reserva? Não tenho certeza, gosto de viver e aproveitar o
              presente.
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
