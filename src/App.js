import Intro from "./components/intro";
import Contact from "./components/contact";
import Portoflio from "./components/portfolio";
import React from "react";

function App() {
  return (
    <div className="canvas">
      <Contact />
      <Intro />
      <Portoflio />
    </div>
  );
}

export default App;
