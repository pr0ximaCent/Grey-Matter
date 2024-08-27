import { robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";
import Generating from "./Generating";

const handleNavigate = () => {
  window.location.href = "/wannabe-a-researcher";
};
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 text-n-1">
            Welcome To Greymatter!<br></br> Explore Infinite possibilities of
            Research & collaborations! {` `}
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8">
            First and only Research Collab Of Bangladesh in One place!
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNavigate}
            size="large"
          >
            Find The Bests!
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490]">
                <img
                  src={robot}
                  className="w-full h-full object-cover"
                  alt="Research"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
              </div>
            </div>
          </div>
  

          <BackgroundCircles />
        </div>

       
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
