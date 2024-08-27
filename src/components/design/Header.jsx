import { background } from "../../assets";



export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-purple-500"></div>
      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-600"></div>
    </>
  );
};





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

      

      <SideLines />

      
    </div>
  );
};