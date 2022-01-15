import React from "react";

import "./styles.css";
import walkInTheCity from "./../../images/walk-in-the-city.svg";

const AboutMe = () => {
  return (
    <section id="about-me" className="container">
      <div className="align-self-center mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 hide-in-mobile my-3">
            <img
              className="img-fluid mt-4"
              src={walkInTheCity}
              alt="Young walking in the city"
              height="338"
            />
          </div>
          <div className="col-md-12 col-lg-6 my-auto">
            <h1 className="heading">About me</h1>
            <p className="mt-4">
              I was born and currently reside in the city of Santa Maria/RS. I
              am graduating in Internet Systems at the Federal University of
              Santa Maria (UFSM).
              <br />
              I am fascinated by new technologies, passionate about music and I
              like to read and watch LGBT+ movies.
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
