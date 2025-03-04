const CloseButton = ({ onClose, className }) => {
    return (
      <button
        onClick={onClose}
        type="button"
        className={`text-white flex hover:bg-red-500 h-7 rounded-full w-7 items-center justify-center ${className}`}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    );
  };
  
  export default CloseButton;
  