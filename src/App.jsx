import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/researchRoadmap';
import Services from './components/Services';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import JRank from './JRank';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Roadmap />
        <Benefits />
        <Collaboration />
        <Services />
<<<<<<< HEAD
        <JRank />
=======
        <Roadmap />
>>>>>>> 852df3fb33ffa90b3dae8876f6958436c4ee4fb6
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
