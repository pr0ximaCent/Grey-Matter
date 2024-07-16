import { background } from "../../assets";

// export const Rings = () => {
//   return (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//       {/* Largest ring */}
//       <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-50 absolute"></div>
//       {/* Medium ring */}
//       <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 opacity-50 absolute"></div>
//       {/* Smallest ring */}
//       <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-green-700 opacity-50 absolute"></div>
//     </div>
//   );
// };



export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-purple-500"></div>
      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-600"></div>
    </>
  );
};


// export const BackgroundCircles = () => {
//   return (
//     <>
//       <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-purple-600"></div>
//       <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
//       <div className="absolute bottom-1/4 left-1/4 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600"></div>
//     </>
//   );
// };



export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      {/* <Rings /> */}

      <SideLines />

      {/* <BackgroundCircles /> */}
    </div>
  );
};