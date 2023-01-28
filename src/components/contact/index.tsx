import React, { useState } from "react";

import "./styles.css";
import iconLinkedin from "./../../images/icon/linkedin.svg";
import iconDribbble from "./../../images/icon/dribbble.svg";
import iconFile from "./../../images/icon/file.svg";
import iconBehance from "./../../images/icon/behance.svg";

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
      alt: "linkedin icon",
      href: "https://www.linkedin.com/in/wesley-belizario-824127162",
    },
    {
      title: "Dribbble",
      src: iconDribbble,
      alt: "Dribbble icon",
      href: "https://dribbble.com/WesleyxBZ",
    },
    {
      title: "Curriculum",
      src: iconFile,
      alt: "File icon",
      href: "https://recondite-bosworth-6ec.notion.site/4877f337723c4451b01f77f1543d7c59",
    },
    {
      title: "Behance",
      src: iconBehance,
      alt: "Behance icon",
      href: "https://www.behance.net/wesleybelizario",
    },
  ]);

  return (
    <section id="contact" className="d-flex justify-content-center">
      <div className="align-self-center">
        <div className="row">
          <div className="col">
            <h1 className="heading text-light text-center mb-4">Contact</h1>
            {socials.map((social: Social, index: number) => {
              return (
                <a
                  key={index}
                  className="mx-4"
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
    </section>
  );
};

export default Contact;
