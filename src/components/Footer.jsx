const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
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
                  className="text-sm hover:text-gray-400 transition duration-300"
                >
                  Research Profile
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm hover:text-gray-400 transition duration-300"
                >
                  Journal Ranking
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm hover:text-gray-400 transition duration-300"
                >
                  Research Roadmap
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm hover:text-gray-400 transition duration-300"
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
                  href="#"
                  className="text-sm hover:text-gray-400 transition duration-300"
                >
                  Site 1
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm hover:text-gray-400 transition duration-300"
                >
                  Site 2
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm hover:text-gray-400 transition duration-300"
                >
                  Site 3
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm hover:text-gray-400 transition duration-300"
                >
                  Site 4
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Grey Matter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
