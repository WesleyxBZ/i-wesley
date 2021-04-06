import React, { useState } from "react";

import "./styles.css";
import iconLinkedin from "./../../images/icon/linkedin.svg";
import iconInstagram from "./../../images/icon/instagram.svg";
import iconGithub from "./../../images/icon/github.svg";

interface Social {
  title: string;
  src: string;
  alt: string;
  href: string;
}

const Contact = () => {
  const [socials] = useState<Social[]>([
    {
      title: "LinkedIn",
      src: iconLinkedin,
      alt: "",
      href: "https://www.linkedin.com/in/wesley-belizario-824127162",
    },
    {
      title: "GitHub",
      src: iconGithub,
      alt: "",
      href: "https://github.com/WesleyxBZ",
    },
    {
      title: "Instagram",
      src: iconInstagram,
      alt: "",
      href: "https://www.instagram.com/wesleyxbz",
    },
  ]);

  return (
    <section id="contato">
      <div className="d-flex justify-content-center contact">
        <div className="align-self-center">
          <div className="row">
            <div className="col">
              {socials.map((social: Social, index: number) => {
                return (
                  <a
                    key={index}
                    className="mx-4 "
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.title}
                  >
                    <img
                      className="img-zoom"
                      src={social.src}
                      alt={social.alt}
                      height="40"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
