import IntroScreen from "./components/IntroScreen/IntroScreen";
import HeroSection from "./sections/HeroSection/HeroSection";
import "./styles/global.css";

function App() {
  return (
    <>
      <IntroScreen>
        <HeroSection />
      </IntroScreen>
    </>
  );
}

export default App;
