
import './App.css';

import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/sections/hero-section/Hero";
import SkillsSection from "./components/sections/skills-section/Skills.scetion";
import PortfolioSection from "./components/sections/portfolio-section/Portfolio.section";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <SkillsSection/>
      <PortfolioSection/>
    </div>
  );
}

export default App;
