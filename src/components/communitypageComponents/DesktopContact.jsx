import React from "react";

const DesktopContact = () => {
  return (
    <div
      className="container mx-auto py-8 flex justify-center"
      style={{
        backgroundImage:
          'url("/https://www.singlegrain.com/wp-content/uploads/2023/05/Dior.jpg")',
      }}
    >
      <div className="container mx-auto ">
        <div className="row">
          <div className="flex justify-center items-center h-screen">
            <div className="text-center">
              <h2
                className="text-h2 text-montserrat font-bold  mb-4"
                id="feature-section-1"
              >
                Questions & Answers
              </h2>
              <p className="text-h5 text-montserrat mb-4">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics:
              </p>
              <h2
                className="text-h6 text-montserrat font-semibold mb-4 text-primary-text-color"
                id="feature-section-2"
              >
                CONTACT US
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopContact;
