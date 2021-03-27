import React from "react";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Start from "./components/start";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Start />
      <AboutMe />
      <div className="bg-wave">
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
