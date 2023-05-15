import React, { Component } from "react";
import Search from "../search/search";
import "boxicons";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props;
    return (
      <div className="navbar z-10 shadow-md bg-gray-800 text-white sticky top-0 scroll-m-10 px-5 sm:px-10 md:h-[50px] sm:h-[50px] w-full grid grid-cols-4 justify-between">
        <div className="logo text-lg font-bold text-white font-sans cursor-pointer">
          Mono
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
              <Link to={`saved`} className="text-white">
                Saved
              </Link>
            </li>
          </ul>
        </div>

        <div className="icons flex items-center cursor-pointer ">
          <Search books={books} />
          <i className="bx bxs-user-circle text-4xl ml-3"></i>
        </div>
      </div>
    );
  }
}
