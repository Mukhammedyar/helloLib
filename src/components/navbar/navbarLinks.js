import React from "react";
import { Link } from "react-router-dom";

function NavbarLinks() {
  return (
    <>
      <div className="logo text-lg font-bold text-white font-sans cursor-pointer">
        Online Library
      </div>
      <div className="hidden navbar-menu items-center justify-center sm:hidden md:flex">
        <ul className="navbar-items flex mx-auto ">
          <li className="  mx-auto px-2 text-center text-md hover:scale-110 hover:text-orange-300 hover:border-b-orange-300 transition ease-linear cursor-pointer">
            <Link to={`/`} className="text-white">
              Home
            </Link>
          </li>
          <li className=" mx-auto px-2 text-md cursor-pointer hover:scale-110 hover:text-orange-300 hover:border-b-orange-300 transition ease-linear ">
            <Link to={`about`} className="text-white">
              About
            </Link>
          </li>
          <li className=" mx-auto px-2 text-md cursor-pointer hover:scale-110 hover:text-orange-300 hover:border-b-orange-300 transition ease-linear ">
            <Link to={`contact`} className="text-white">
              Contacts
            </Link>
          </li>
          <li className=" mx-auto px-2 text-md cursor-pointer hover:scale-110 hover:text-orange-300 hover:border-b-orange-300 transition ease-linear ">
            <Link to={`savedbooks`} className="text-white">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarLinks;
