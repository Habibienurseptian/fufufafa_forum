import React, { useState, useEffect } from "react";

const Avatar = ({ name, username, profileImage, createdAt, postId }) => {
  const [timeText, setTimeText] = useState(formatTime(createdAt));

  function formatTime(createdAt) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - createdAt) / 1000);

    if (diffInSeconds < 1) return "Baru saja";
    if (diffInSeconds < 60) return `${diffInSeconds} d`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} m`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} j`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} h`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeText(formatTime(createdAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [createdAt]);
  return (
    <div className="flex flex-shrink-0 p-4 pt-2 pb-0" key={postId}>
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={profileImage}
              alt="Profile"
            />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-bold text-white mb-2">
              {name}
              <span className="text-sm px-1 leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @{username} · {timeText}
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Avatar;
