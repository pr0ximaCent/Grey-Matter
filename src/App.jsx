import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import Faq from "./components/Faq";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Roadmap />
        <Benefits />
        {/* <Collaboration />
        <Services /> */}
        <Roadmap />
        <Faq/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
