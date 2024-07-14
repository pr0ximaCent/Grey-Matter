import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const SignUpModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      classNames={{ modal: "customModal", overlay: "customOverlay" }}
      styles={{
        modal: {
          maxWidth: "600px", // Adjust maximum width as needed
          maxHeight: "80vh", // Adjust maximum height as needed
          backgroundColor: "#1a202c", // Dark background color
          color: "#ffffff", // Text color
          padding: "20px",
          position: "relative", // Ensure the modal respects its content's height
        },
      }}
      overlayClassName="customOverlay"
    >
      <div className="p-6">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "white", textAlign: "center" }}
        >
          Get Started Absolutely Free!
        </h2>

        <span className="text-gray-400 text-sm mb-6 block" style={{ color: "white", textAlign: "center" }}>
          No credit card needed
        </span>
        <form className="space-y-6">
          {" "}
          {/* Increased vertical spacing */}
          <div className="relative mb-6">
            {" "}
            {/* Increased margin-bottom */}
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              className="w-full border border-gray-700 rounded-md py-2 px-10 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              name="name"
              id="name"
              placeholder="First Name"
              required
              autoComplete="off"
              aria-required="true"
            />
          </div>
          <div className="relative mb-6">
            {" "}
            {/* Increased margin-bottom */}
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              className="w-full border border-gray-700 rounded-md py-2 px-10 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              autoComplete="off"
              aria-required="true"
            />
          </div>
          <div className="relative mb-6">
            {" "}
            {/* Increased margin-bottom */}
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              name="pass"
              className="w-full border border-gray-700 rounded-md py-2 px-10 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Password"
              required
              autoComplete="off"
              aria-required="true"
            />
          </div>
          <button className="w-full py-2 px-4 rounded-md text-white font-bold hover:opacity-90 bg-gradient-to-r from-purple-500 to-indigo-400 transition duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SignUpModal;
