import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./Button/ProfileCard";
import BtnPost from "./Button/BtnPost";
import CloseButton from "./Button/CloseBtn";
import PostButton from "./Button/BtnPostBar";

function LeftBar() {
  const [postModal, setpostModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    console.log(isMobile);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return (
      <header className=" text-white md:py-5">
        <div className="w-[275px]">
          <div className="fixed h-screen">
            <nav className="px-2 w-[65px] md:w-[250px]">
              <a href="" className="h-8 w-8 text-white md:block hidden mb-4">
                <span className="ml-2 text-4xl font-bold">Fufufafa</span>
              </a>
              <ul>
                <li className="list-none">
                  <Link
                    to="/"
                    className=" mt-2 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="md:mr-4 h-8 w-8 "
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                      ></path>
                    </svg>
                    <span className="md:block hidden text-xl">Home</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/message"
                    className="mt-2 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="md:mr-4 h-8 w-8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="md:block hidden text-xl">Message</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/profile"
                    className="mt-2 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="md:mr-4 h-8 w-8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span className="md:block hidden text-xl">Profile</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#"
                    className="mt-2 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="md:mr-4 h-8 w-8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="md:block hidden text-xl">More</span>
                  </a>
                </li>
              </ul>
              <PostButton
                onClick={() => setpostModal(true)}
                label="Post"
                className="custom-class"
              />
              <ProfileCard
                name="Miyuzaki San"
                username="san_miyuzaki"
                profileImage="https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg"
                href="#"
              />
            </nav>
          </div>
        </div>
        {postModal && <ModalPost onClose={() => setpostModal(false)} />}
      </header>
    );
  } else {
    return (
      <header className=" text-white md:py-5 fixed bottom-0 left-0 w-screen bg-black max-w-full">
        <div className="">
          <div className="">
            <nav className=" flex flex-wrap justify-around items-center py-2">
              <ul className="">
                <li className="list-none">
                  <Link
                    to="/"
                    className=" group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="md:mr-4 h-8 w-8 "
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/message"
                    className=" group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="md:mr-4 h-8 w-8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
              {/* <PostButton
                onClick={() => setpostModal(true)}
                label="Post"
                className="custom-class"
              /> */}
              <ul>
                <li>
                  <a
                    href="#"
                    className=" group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="md:mr-4 h-8 w-8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/profile"
                    className=" group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                  >
                    <img
                      className=" h-8 w-8 rounded-full"
                      src="https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {postModal && <ModalPost onClose={() => setpostModal(false)} />}
      </header>
    );
  }
}

function ModalPost({ onClose, handlePost }) {
  return (
    <div className="flex fixed inset-0 bg-gray-500 bg-opacity-50 justify-center items-center">
      <div className="bg-black p-4 rounded-lg shadow-lg w-full md:w-auto">
        <div className="flex">
          <div className="m-4 w-10 py-1">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 px-1 pt-2 mt-4 w-auto">
            <textarea
              className="resize-none outline-none bg-transparent text-gray-400 font-medium text-lg w-full"
              rows="10"
              placeholder="What's happening?"
            ></textarea>
          </div>
          <CloseButton onClose={onClose} />
        </div>
        <hr className="border-gray-800 border-1"></hr>
        <div className="flex">
          <div className="w-10"></div>
          <div className="w-64 px-2">
            <div className="flex items-center">
              <div className="flex-1 text-center px-1 py-1 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <BtnPost
              onClick={handlePost}
              label="Post"
              className="mt-5 mr-8 float-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
