import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BasicHero"
import Features from "components/features/BasicFeatures"
import MoreFeatures from "components/features/MoreFeatures"

function App() {
  return (
    <AnimationRevealPage>
    <Hero />
    <Features/>
    <MoreFeatures/>
  </AnimationRevealPage>
  );
}

export default App;
