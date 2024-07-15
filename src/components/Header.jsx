import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { greymatter } from '../assets';
import { navigation } from '../constants/index.js';
import Button from './Button';
import { HamburgerMenu } from './design/Header';
import SignUpModal from './SignupModal';
import SignInModal from './SigninModal';
import 'react-responsive-modal/styles.css';

const Header = () => {
  const location = useLocation();
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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

  const handleClick = (event) => {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('href');
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', url);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className="bg-gradient-to-b from-navyBlue-700 to-lightBlack-800 shadow-md"
        style={{
          backdropFilter: 'blur(8px)', // Optional: Adds a blur effect behind the element
        }}
      >
        <div className="flex items-center justify-between px-4 lg:px-8 py-3 max-w-screen-xl mx-auto">
          <a className="flex items-center" href="#hero" onClick={handleClick}>
            <img src={greymatter} width={60} height={40} alt="Grey Matter" />
            <span className="ml-2 text-white text-lg font-semibold">
              Grey Matter
            </span>
          </a>

          <nav className="hidden lg:flex space-x-4">
            {navigation.map((elem) => (
              <a
                key={elem.id}
                href={`#${elem.url}`}
                onClick={handleClick}
                className={`text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 text-xs font-medium uppercase ${
                  `#${elem.url}` === location.hash ? 'text-white' : ''
                }`}
              >
                {elem.title}
              </a>
            ))}
          </nav>

          <div className="flex space-x-3 items-center">
            <a
              href="#signup"
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 text-xs font-medium uppercase"
              onClick={handleSignupOpen}
            >
              Sign Up
            </a>

            <a
              href="#signin"
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 text-xs font-medium uppercase"
              onClick={handleLoginOpen}
            >
              Sign In
            </a>

            <Button
              href="#login"
              className="text-xs font-medium h-6 w-12 transition-all duration-300 hover:bg-gradient-to-r hover:text-black"
            >
              Join!
            </Button>
          </div>

          <HamburgerMenu />
        </div>
      </div>

      <SignUpModal open={signupOpen} onClose={handleSignupClose} />
      <SignInModal open={loginOpen} onClose={handleLoginClose} />
    </div>
  );
};

export default Header;
