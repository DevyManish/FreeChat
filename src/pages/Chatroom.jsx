import React, { useEffect, useRef } from "react";
import Error from "../components/ErrorPage";

const Chatroom = ({ isAuthenticated }) => {
  const messagesRef = useRef(null);

//   useEffect(() => {
//     messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
//   }, []);

  return (
    <>
      {isAuthenticated ? (
        <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
          <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="relative flex items-center space-x-4">
              {/* Profile image and info */}
            </div>
            <div className="flex items-center space-x-2">{/* Buttons */}</div>
          </div>
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
            ref={messagesRef}
          >
            <div className="chat-message">{/* Chat message content */}</div>
            {/* Repeat chat message blocks as needed */}
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <span className="absolute inset-y-0 flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  {/* Button icon */}
                </button>
              </span>
              <input
                type="text"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
              />
              <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                {/* Additional buttons */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error/>
      )}
    </>
  );
};

export default Chatroom;
