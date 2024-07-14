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

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <div className="flex items-center">
            <img src={greymatter} width={60} height={40} alt="Grey Matter" />
            <span className="ml-1 text-n-1">Grey Matter</span>
          </div>
        </a>

        <nav className="hidden lg:flex lg:mx-auto">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((elem) => (
              <a
                key={elem.id}
                href={elem.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  elem.url === pathname.hash ? 'text-n-1' : 'text-n-1/50'
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {elem.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          onClick={handleSignupOpen}
        >
          Sign Up
        </a>

        <a
          href="#"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          onClick={handleLoginOpen}
        >
          Sign In
        </a>

        <Button className="lg:flex h-8" href="login">
          Join!
        </Button>
      </div>

      <SignUpModal open={signupOpen} onClose={handleSignupClose} />
      <SignInModal open={loginOpen} onClose={handleLoginClose} /> {/* Ensure correct component */}
    </div>
  );
};

export default Header;
