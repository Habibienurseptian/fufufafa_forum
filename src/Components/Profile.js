import React from "react";
import Header from "./Header";

function Profile(){
    return(
        <div>
            <Header
                title="Profile"
                iconLink="#"
            />
            <div>
            <hr className="border-gray-800"></hr>
                <div className="flex justify-start">
                    <div className="px-4 py-2 mx-2">
                        <a href="" className=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                            <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <g>
                                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z">
                                    </path>
                                </g>
                            </svg>
                        </a>
                    </div> 
                    <div className="mx-2 my-2">
                        <h2 className="mb- text-xl font-bold text-white">Miyuzaki San</h2>
                        <p className="mb-0 w-48 text-xs text-gray-400">0 Tweets</p>
                    </div>
                </div>
                <hr className="border-gray-800"></hr>
            </div>
            <div>
                <div className="w-full bg-cover bg-no-repeat bg-center h-[200px] bg-[url('https://asset-2.tstatic.net/bengkulu/foto/bank/images/PP-Couple-Wa-Anime-Terpisah-7.jpg')]">
                    <img className="w-full h-full" src="https://asset-2.tstatic.net/bengkulu/foto/bank/images/PP-Couple-Wa-Anime-Terpisah-7.jpg" alt="" />
                </div>
                <div className="p-4">
                    <div className="flex w-full">
                        <div className="flex flex-1">
                            <div className="mt-[-6rem]">
                                <div className="h-36 w-36 md rounded-full  avatar">
                                    <img className="h-36 w-36 md rounded-full  border-4 border-gray-900" src="https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-right">
                            <button className="flex justify-center max-h-max whitespace-nowrap focus:outline-none  focus:ring  max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    <div className="space-y-1 justify-center w-full mt-3 ml-3">
                        <div>
                            <h2 className="text-xl leading-6 font-bold text-white">Miyuzaki San</h2>
                            <p className="text-sm leading-5 font-medium text-gray-600">@san_miyuzaki</p>
                        </div>
                        <div className="mt-3">
                            <p className="text-white leading-tight mb-2">Content Creator / Designer / Entrepreneur <br/>Dont Forget Follow Me </p>
                        </div>
                        <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                            <div className="text-center pr-3"><span className="font-bold text-white">145</span><span className="text-gray-600"> Following</span></div>
                            <div className="text-center px-3"><span className="font-bold text-white">1m </span><span className="text-gray-600"> Followers</span></div>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-800 border-4"></hr>
            </div>
        </div>
    )
};

export default Profile;