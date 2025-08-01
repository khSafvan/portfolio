import "./App.css";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./sections/HeroSection";
import StackSection from "./sections/StackSection";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="globelWrap">
        <HeroSection />
        <StackSection />
      </div>
    </>
  );
}

export default App;
