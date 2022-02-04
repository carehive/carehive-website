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
import Faqs from "components/Faqs/BasicFaqs"
import Cta from "components/Cta/BasicCta"
import Footer from "components/Footer/BasicFooter"
import Subscription from "components/Waitlist/subscription"

function App() {
  return (
    <div>
    <AnimationRevealPage>
      <Hero />
    </AnimationRevealPage>
    <AnimationRevealPage>
      <Features/>
    </AnimationRevealPage>
    <AnimationRevealPage>
      <MoreFeatures/>
    </AnimationRevealPage>
      {/*<Testimony/>
      <Cta/>*/}
    <AnimationRevealPage>  
      <Faqs/>
    </AnimationRevealPage>
    <AnimationRevealPage>
      <Footer/>
    </AnimationRevealPage>
  
  </div>
  );
}

export default App;
