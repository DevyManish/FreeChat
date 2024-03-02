import React from "react";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <img
                className="w-20 h-20 rounded-full inline-flex items-center justify-center"
                src={avatar}
              />
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-white text-lg">
                  Manish
                </h2>
                <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4" />
                <p className="text-base text-gray-400">
                  MERN Learner & Dev Enthusiast
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
              Welcome to FreeChat, the ultimate destination for free group chatroom services. With an intuitive interface and instant connectivity, FreeChat allows you to join or create chatrooms on any topic imaginable without the hassle of sign-ups. Personalize your experience with customization options while enjoying a safe environment with built-in moderation tools. Accessible across all devices, FreeChat prioritizes your privacy and security through encryption protocols. Join our vibrant community today and experience the joy of seamless communication with FreeChat.
              </p>
              <Link className="text-yellow-400 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
