import React from "react";
import Header from "./Header";


function Message() {
  const messages = [
    {
      username: "Asepkuda",
      handle: "@asepkudabu",
      message: "ada barang barunya",
    },
    {
      username: "Rotibakar",
      handle: "@gagakoseq",
      message: "kak keranjang ada",
    },
    {
      username: "Lengkuas",
      handle: "@lengkuas_uhh",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    { username: "nahhh", handle: "@huhu", message: "ke kanan" },
  ];

  return (
    <div>
      <Header
        title="Massage"
        iconLink="#"
      />
      <hr className="border-gray-800"></hr>
      <ul className="list-none">
        {messages.map((msg, index) => (
          <li
            key={index}
            className="border-b border-gray-700 py-4 flex items-center text-left"
          >
            <div className="ml-4 flex break-normal">
              <div className="w-12 h-12 bg-red-700 rounded-full flex-shrink-0">
                <div className="w-12 h-12 bg-red-700 rounded-full flex-shrink-0 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/21/a8/c8/21a8c882a7d18e577eef4a48eec20b46.jpg"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-bold text-white">
                  {msg.username}{" "}
                  <span className="text-gray-400 text-xs">{msg.handle}</span>
                </p>
                <p className="text-gray-300 text-sm mt-1">{msg.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Message;
