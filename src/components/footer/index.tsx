import React, { useState } from "react";

import "./styles.css";

const Footer = () => {
  const [year] = useState<number>(new Date().getFullYear());

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 py-2 text-center">
            <p className="mb-0 text-light font-weight-lighter">
              © Copyright {year} Wesley Belizario
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
