import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BasicHero"
import Features from "components/features/BasicFeatures"
import MoreFeatures from "components/features/MoreFeatures"
import Testimony from "components/Testimonial/BasicTestimony"

function App() {
  return (
    <AnimationRevealPage>
    <Hero />
    <Features/>
    <MoreFeatures/>
    <Testimony/>
  </AnimationRevealPage>
  );
}

export default App;
