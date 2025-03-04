const PostButton = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={`w-[48px] md:w-[230px] ${className}`}>
      <div className="md:mt-2 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full bg-blue-400 hover:bg-blue-500">
        <svg
          className="md:mr-4 h-8 w-8 md:invisible"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        <span className="md:block hidden text-xl px-10">{label}</span>
      </div>
    </button>
  );
};

export default PostButton;
