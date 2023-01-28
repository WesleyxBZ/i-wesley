import React from "react";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Cases from "./components/cases";
import Start from "./components/start";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Start />
      <AboutMe />
      <div className="bg-wave">
        <Cases />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
