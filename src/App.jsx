import 'react';
import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchRoadmap from './components/researchRoadmap';
import Footer from './components/Footer';
import FAQ from './components/Faq';
import '@fortawesome/fontawesome-free/css/all.css';
import LinesComponent from './components/LinesComponent';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <LinesComponent />
        <Header />
        <div id="hero">
          <Hero />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="research-roadmap">
          <ResearchRoadmap />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;