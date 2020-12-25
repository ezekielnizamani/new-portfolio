
import './App.css';


import HeroSection from "./components/sections/hero-section/Hero";
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
    </div>
  );
}

export default App;
