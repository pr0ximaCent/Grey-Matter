import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchRoadmap from './components/researchRoadmap';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import FAQ from './components/Faq';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
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
