import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ResearchRoadmap from "./components/researchRoadmap";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <ResearchRoadmap />
        <Collaboration />
        <Services />

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
