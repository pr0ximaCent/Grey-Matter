import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css"; // Import styles

const SignInModal = ({ open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    center
    classNames={{ overlay: "customOverlay", modal: "customModal" }}
    styles={{
      modal: {
        maxWidth: "480px",
        width: "100%",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      },
    }}
  >
    <div className="modal-body bg-gray-50 p-6 rounded-lg shadow-md w-full max-w-sm">
      <div className="flex justify-end">
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4" style={{ color: "black" }}>
        Login and Get Started
      </h2>
      <span className="text-gray-500 text-sm mb-6 block">
        Just fill in the form below
      </span>
      <form className="space-y-4">
        <div>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="E-mail"
            required
            autoComplete="off"
            aria-required="true"
          />
        </div>
        <div>
          <input
            type="password"
            name="pass"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            required
            autoComplete="off"
            aria-required="true"
          />
        </div>
        <button className="w-full py-2 px-4 rounded-md text-white font-bold hover:opacity-90 bg-gradient-to-r from-purple-500 to-indigo-400 transition duration-300">
          Sign In
        </button>
      </form>
    </div>
  </Modal>
);

export default SignInModal;
