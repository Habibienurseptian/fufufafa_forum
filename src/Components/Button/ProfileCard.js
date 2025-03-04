const ProfileCard = ({ name, username, profileImage, href }) => {
  return (
    <div className="mt-64">
      <div className="flex-shrink-0 flex hover:bg-gray-800 rounded-full px-2 py-2 mt-12 mr-1 ml-1">
        <a href={href} className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src={profileImage}
                alt={`${name} Profile`}
              />
            </div>
            <div className="ml-2 md:block hidden">
              <p className="text-base leading-6 font-medium text-white">
                {name}
              </p>
              <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @{username}
              </p>
            </div>
            <svg
              className="md:block hidden mr-1 ml-7 h-6 w-10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
