import logo from './logo.svg';
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BasicHero"

function App() {
  return (
    <AnimationRevealPage>
    <Hero />
  </AnimationRevealPage>
  );
}

export default App;
