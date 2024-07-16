

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#15131E',
    color: 'white',
    padding: '2rem 0',
  };

  const hoverStyle = {
    transition: 'color 0.3s',
  };

  const iconHoverStyle = {
    color: '#gray-400',
    transition: 'color 0.3s',
  };

  const borderStyle = {
    borderTop: '1px solid #gray-800',
    marginTop: '1.5rem',
    paddingTop: '1rem',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
            <h4 className="text-lg font-bold mb-4">Grey Matter</h4>
            <p className="text-sm">Chittagong-4349, Chittagong, Bangladesh</p>
            <p className="text-sm">greymatter@yahoo.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm"
                  style={hoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = '#gray-400')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Research Profile
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm"
                  style={hoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = '#gray-400')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Journal Ranking
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm"
                  style={hoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = '#gray-400')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Research Roadmap
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm"
                  style={hoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = '#gray-400')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Wanna Be a Researcher?
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
            <h4 className="text-lg font-bold mb-4">Important Sites</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.researchgate.net/"
                  className="text-sm"
                  style={hoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = '#gray-400')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  ResearchGate
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://ieeexplore.ieee.org/"
                  className="text-sm"
                  style={hoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = '#gray-400')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  IEEE Xplore
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.sciencedirect.com/"
                  className="text-sm"
                  style={hoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = '#gray-400')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  ScienceDirect
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://arxiv.org/"
                  className="text-sm"
                  style={hoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = '#gray-400')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  arXiv
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/dot.quanta.007"
                  style={iconHoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = 'white')}
                  onMouseLeave={(e) => (e.target.style.color = '#gray-400')}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sabik-aftahee-2017a617b/"
                  style={iconHoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = 'white')}
                  onMouseLeave={(e) => (e.target.style.color = '#gray-400')}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={iconHoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = 'white')}
                  onMouseLeave={(e) => (e.target.style.color = '#gray-400')}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={iconHoverStyle}
                  onMouseEnter={(e) => (e.target.style.color = 'white')}
                  onMouseLeave={(e) => (e.target.style.color = '#gray-400')}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={borderStyle}>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Grey Matter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
