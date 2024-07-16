import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-1/40 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      <span className="text-n-8">Find Your Scientist now!</span>
    </div>
  );
};

export default Generating;
