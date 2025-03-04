const BtnPost = ({ onClick, label, className }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-full ${className}`}
      >
        {label}
      </button>
    );
  };
  
  export default BtnPost;  