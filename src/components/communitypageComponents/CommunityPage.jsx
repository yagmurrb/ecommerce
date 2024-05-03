import React from "react";

const CommunityPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-8">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2
              className="text-h2 font-bold text-center mb-4"
              id="feature-section"
            >
              Get answers to all your questions.
            </h2>
            <p className="text-h5 text-montserrat text-center text-second-text-color font-semibold mb-6">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </p>
            <div className="flex justify-center">
              <button className="text-btn bg-blue-500 hover:bg-blue-800 text-white text-montserrat font-semibold py-3 px-10 rounded text-base mb-6">
                CONTACT OUR COMPANY
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src="/twitter-logo.png"
                alt="Twitter Logo"
                className="w-8 h-8 mr-2"
              />
              <img
                src="/facebook-logo.png"
                alt="Facebook Logo"
                className="w-8 h-8 mr-2"
              />
              <img
                src="/instagram-logo.png"
                alt="Instagram Logo"
                className="w-8 h-8 mr-2"
              />
              <img
                src="/linkedin-logo.png"
                alt="LinkedIn Logo"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
