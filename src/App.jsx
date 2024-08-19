import React from "react";
import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import HowToBuy from "./view/HowToBuy";

const App = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomics />
    </main>
  );
};

export default App;
