import React from "react";
import { Link } from "react-router-dom";
function NavbarBottom() {
  return (
    <div className="bg-light-bg-color text-h3 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <p className="m-0 mr-6 text-text-color font-bold bg-white text-h3">
          UniqueR
        </p>
        <div className="relative">
          <div className="absolute top-full left-0 w-32 bg-gray-800 py-2 rounded-md shadow-lg hidden"></div>
        </div>
        <a href="#" className="text-link text-h6 hover:underline mr-4">
          Home
        </a>
        <button className="text-link text-h6 hover:underline mr-4">Shop</button>
        <a href="#" className="text-link text-h6 hover:underline mr-4">
          About
        </a>
        <a href="#" className="text-link text-h6 hover:underline mr-4">
          Blog
        </a>
        <a href="#" className="text-link text-h6 hover:underline mr-4">
          Contact
        </a>
        <a href="#" className="text-link text-h6 hover:underline">
          Pages
        </a>
      </div>
      <div className="flex items-center ">
        <div className="mr-4 flex flex-row content-center">
          <i className="fa-regular fa-user  mr-3"></i>
          <a href="#" className="text-link text-h6 hover:underline">
            Login
          </a>
          <span className="text-link text-h6 mx-2">/</span>
          <a href="#" className="text-link text-h6 hover:underline">
            Register
          </a>
        </div>
        <div className="flex items-center">
          <Link>
            <i className="fa-solid fa-magnifying-glass fa-sm"></i>
          </Link>

          <Link>
            {" "}
            <i className="fa-solid fa-cart-shopping fa-sm"></i>
          </Link>
          <Link>
            {" "}
            <i className="fa-regular fa-heart fa-sm"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarBottom;
