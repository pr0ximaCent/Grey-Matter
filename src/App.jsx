import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import LinesComponent from './components/LinesComponent';
import ResearchRoadmap from './components/researchRoadmap'
import FAQ from "./components/Faq"
const App = () => {
  return (
    <>
      <div className="overflow-hidden">

        <Header />
        <LinesComponent />
        <Hero />
        <Benefits />
    
        <ResearchRoadmap />
        <FAQ />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;