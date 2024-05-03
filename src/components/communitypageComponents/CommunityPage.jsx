import React from "react";

const CommunityPage = () => {
  return (
    <div className="">
      <div className=" container flex flex-col mx-auto py-8 max-w-xl">
        <div>
          <h2
            className="text-h2 font-bold text-center mb-6"
            id="feature-section"
          >
            Get answers to all your questions.
          </h2>
          <p className="text-h4 text-center text-second-text-color mb-8">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
        </div>
        <div className="flex justify-center">
          <button className="text-btn bg-blue-500 hover:bg-blue-800 text-white  font-semibold py-3 px-12 rounded mb-5 leading-8 text-h6">
            CONTACT OUR COMPANY
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://twitter.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/twitterlogo.svg"
              alt="Twitter Logo"
              className="w-242 h-50 p-10 mr-34"
            />
          </a>
          <a
            href="https://www.facebook.com/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/facebooklogo.svg"
              alt="Facebook Logo"
              className="w-242 h-50 p-10 mr-34"
            />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagramlogo.svg"
              alt="Instagram Logo"
              className="w-242 h-50 p-10 mr-34"
            />
          </a>
          <a
            href="https://www.linkedin.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedinlogo.svg"
              alt="LinkedIn Logo"
              className="w-242 h-50 p-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
