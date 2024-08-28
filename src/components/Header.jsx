import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { greymatter } from "../assets";
import { navigation } from "../constants/index.js";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import SignUpModal from "./SignupModal";
import SignInModal from "./SigninModal";
import "react-responsive-modal/styles.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

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

  const handleClick = (event, url) => {
    event.preventDefault();
    if (url === "journal-ranking") {
      navigate("/journal-ranking");
    }else if(url === "paper-writing"){
      navigate("/paper-writing");
    }
     else if (url === "#research-roadmap") {
      const element = document.querySelector("#research-roadmap");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }else if (url === "wannabe-a-researcher") {
        navigate("/wannabe-a-researcher");
    }
    else if (url === "Home") {
      //home link alada handle kora hoise, see if you can make it better without altering functionality
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-7/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a
          className="block w-[12rem] xl:mr-8"
          href="/"
          style={{ filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))" }}
        >
          <div className="flex items-center">
            <img
              src={greymatter}
              width={60}
              height={40}
              alt="Grey Matter"
              style={{
                filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.09))",
              }}
            />
            <span
              className="ml-1 text-n-1"
              style={{ textShadow: "0 0 2px rgba(255, 255, 255, 0.5)" }}
            >
              Grey Matter
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex lg:mx-auto">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((elem) => (
              <a
                key={elem.id}
                href={
                  elem.url
                }
                onClick={(event) => handleClick(event, elem.url)}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  elem.url === location.hash ? "text-n-1" : "text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {elem.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <div className="flex space-x-3 items-center">
          <a
            href="#signin"
            className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-12 text-xs font-medium uppercase"
            onClick={handleLoginOpen}
          >
            Sign In
          </a>

          <Button
            href="#login"
            className="text-xs font-medium h-6 w-12 transition-all duration-300 hover:bg-gradient-to-r hover:text-black"
            onClick={handleSignupOpen}
          >
            Join!
          </Button>
        </div>

        <HamburgerMenu />
      </div>

      <SignUpModal open={signupOpen} onClose={handleSignupClose} />
      <SignInModal open={loginOpen} onClose={handleLoginClose} />
    </div>
  );
};

export default Header;
