import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const ChemicalFlasks = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-20 h-40 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-32 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-12 h-24 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-8 h-16 bg-yellow-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <ChemicalFlasks />

      {/* Moving background chemical flasks */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-1 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={`w-8 h-16 -ml-4 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-t-full rounded-b-full transition-transform duration-500 ease-out overflow-hidden ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-full h-1/2 bg-[#DD734F]"></div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={`relative w-10 h-20 -ml-5 -mt-32 bg-gradient-to-b from-[#FF7F50] to-[#483D8B] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="absolute top-0 w-full h-1/2 bg-[#FF7F50] rounded-t-full"></div>
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={`relative hidden w-12 h-24 -ml-6 mt-[12.9rem] bg-gradient-to-b from-[#FFD700] to-[#483D8B] rounded-full xl:block transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="absolute top-0 w-full h-1/2 bg-[#FFD700] rounded-t-full"></div>
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={`relative w-6 h-12 -ml-3 mt-52 bg-gradient-to-b from-[#7FFF00] to-[#483D8B] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="absolute top-0 w-full h-1/2 bg-[#7FFF00] rounded-t-full"></div>
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`relative w-12 h-24 -ml-6 -mt-6 bg-gradient-to-b from-[#00CED1] to-[#483D8B] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="absolute top-0 w-full h-1/2 bg-[#00CED1] rounded-t-full"></div>
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`relative w-10 h-20 -ml-5 -mt-5 bg-gradient-to-b from-[#FF69B4] to-[#483D8B] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="absolute top-0 w-full h-1/2 bg-[#FF69B4] rounded-t-full"></div>
          </div>
        </div>
      </MouseParallax>
    </div>
  );
};
