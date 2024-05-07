import React from "react";
import { teams } from "../data/data";

const TeamPage = () => {
  const imageUrl =
    "https://www.shutterstock.com/image-photo/beautiful-sexy-brunette-woman-tanned-600nw-1686851977.jpg";
  return (
    <div className="bg-white text-gray-800">
      <header className="container mx-auto px-4 py-5 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold">Bandage</h1>
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <button className="text-blue-500 hover:text-blue-600">Login</button>
            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Become a member
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">WHAT WE DO</h3>
          <h1 className="text-h1 font-bold text-center mb-6">
            Innovation tailored for you
          </h1>
          <div className="flex justify-center">
            <a href="#" className="text-blue-500 hover:underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="#" className="text-blue-500 hover:underline">
              Team
            </a>
          </div>
        </div>
      </header>
      <div className="container mx-auto flex mb-10">
        <div className="w-1/2">
          <img src={imageUrl} alt="Large Image" className="w-full h-auto" />
        </div>
        <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
          <img src={imageUrl} alt="Image 1" className="w-full h-full" />
          <img src={imageUrl} alt="Image 2" className="w-full h-full" />
          <img src={imageUrl} alt="Image 3" className="w-full h-full" />
          <img src={imageUrl} alt="Image 4" className="w-full h-full" />
        </div>
      </div>
      {/* Meet Our Team Section */}
      <div
        className="container mx-auto px-4 py-5"
        style={{ maxWidth: "1050px" }}
      >
        <h1
          className="text-h2 font-bold text-center mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Meet Our Team
        </h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {teams.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow rounded overflow-hidden"
              style={{
                width: "280px",
                height: "400px",
                margin: "20px",
                border: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <img
                src={member.imageUrl1}
                alt="Team member"
                className="w-full"
                style={{ height: "50%" }}
              />
              <div
                className="p-4 text-center flex flex-col justify-center"
                style={{ height: "50%" }}
              >
                <h2
                  className="font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {member.username}
                </h2>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {member.profession}
                </p>
                <div className="flex justify-center space-x-2 mt-2">
                  <a href="#">
                    <img
                      src="https://as2.ftcdn.net/v2/jpg/03/98/85/79/1000_F_398857973_UhCly9tl1bQyGmkKJkKqgijRu5CB8G6T.jpg"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnX7BCTGyakX1OloAICwyZXJ5waWsx_nzhq_31jFZQ6A&s"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://download.logo.wine/logo/Twitter/Twitter-Logo.wine.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className=" container flex flex-col mx-auto py-8 max-w-xl">
            <div>
              <h2
                className="text-h2 font-bold text-center mb-6"
                id="feature-section"
              >
                Start your 14 days free trial
              </h2>
              <p className="text-h4 text-center text-second-text-color">
                Sed ut perspiciatis unde omnis iste natus error sit, totam rem
                aperiam, eaque ipsa quae ab illo inventore.
              </p>
            </div>
            <div className="flex justify-center my-8">
              <button className="btn-blue w-[272px] h-[52px] text-paragraph font-semibold">
                Try it free now
              </button>
            </div>
            <div className="flex justify-center">
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitterlogo.svg" className=" mx-5" />
              </a>
              <a
                href="https://www.facebook.com/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/facebooklogo.svg" className=" mx-5" />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagramlogo.svg" className=" mx-5" />
              </a>
              <a
                href="https://www.linkedin.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedinlogo.svg" className="mx-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamPage;
