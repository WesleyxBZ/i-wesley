import React from "react";
import Button from "../../button";

import "./styles.css";
import officeJob from "./../../../images/office-job.svg";

const StartContent = () => {
  return (
    <div className="container startcontent">
      <div className="align-self-center">
        <div className="row">
          <div className="col-md-12 col-lg-6 ">
            <h1
              className="display"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="900"
              data-aos-once="true"
            >
              Wesley <br /> Belizario
            </h1>
            <p
              className="my-4"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="900"
              data-aos-once="true"
            >
              Hi! I'm Wesley and I work as <br />
              a Product Designer.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <Button
                type="button-primary"
                title="About me"
                link="#about-me"
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 hide-in-mobile text-end">
            <img
              src={officeJob}
              alt="Ilustration of a young man at a computer desk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartContent;
