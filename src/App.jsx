import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import LinesComponent from './components/LinesComponent';

const App = () => {
  return (
    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <LinesComponent />
        
        <Header />
        <Hero />
        <Roadmap />
        <Benefits />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
