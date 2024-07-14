import { useState } from "react";
import { useLocation } from "react-router-dom";
import { greymatter } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import SignUpModal from "./SignupModal";
import SignInModal from "./SigninModal";
import "react-responsive-modal/styles.css";

const Header = () => {
  const pathname = useLocation();
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleSignupOpen = () => {
    setSignupOpen(true);
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleClick = () => {
    // Handle any click events if needed
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <div className="flex items-center">
            <img src={greymatter} width={60} height={40} alt="Grey Matter" />
            <span className="ml-1 text-n-1">Grey Matter</span>
          </div>
        </a>

        <nav className="hidden lg:flex space-x-4">
          {navigation.map((elem) => (
            <a
              key={elem.id}
              href={elem.url}
              onClick={handleClick}
              className={`text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 text-xs font-medium uppercase ${
                elem.url === pathname.hash ? "text-white" : ""
              }`}
            >
              {elem.title}
            </a>
          ))}
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          onClick={handleSignupOpen}
        >
          Sign Up
        </a>

        <a
          href="#signin"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          onClick={handleLoginOpen}
        >
          Sign In
        </a>

        <Button className="lg:flex h-8" href="#login">
          Join!
        </Button>
      </div>

      <SignUpModal open={signupOpen} onClose={handleSignupClose} />
      <SignInModal open={loginOpen} onClose={handleLoginClose} />
    </div>
  );
};

export default Header;
