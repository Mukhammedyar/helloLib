import React, { Component } from "react";
import Search from "../search/search";
import "boxicons";
import NavbarLinks from "./navbarLinks";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    const { books } = this.props;
    return (
      <div className="sticky top-0 z-10">
        <nav className="navbar shadow-md bg-gray-800 text-white px-5 sm:px-10 md:h-[50px] sm:h-[50px] w-full grid grid-cols-4 justify-between">
          <NavbarLinks />
          <div className="icons flex items-center cursor-pointer ">
            <Search books={books} />
            <button
              className="relative"
              popovertarget="modal-profile"
              onClick={this.handleClick}>
              <i className="bx bxs-user-circle text-4xl ml-3"></i>
            </button>
            {this.state.modal && (
              <div
                id="modal-profile"
                className="show py-2 decoration-inherit text-sm flex flex-col items-center hover:text-white text-white absolute bg-[rgba(100,100,100,.2)] backdrop-blur-md top-[55px] right-5 rounded">
                <Link
                  className="w-full text-center pb-1 hover:bg-gray-700 px-2"
                  to={"/profile"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    borderBottom: "1px solid gray",
                  }}>
                  Profile
                </Link>
                <Link
                  className="w-full text-center pb-1 hover:bg-gray-700 px-2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    borderBottom: "1px solid gray",
                  }}
                  to={"/Login"}>
                  Log in
                </Link>
                <Link
                  className="w-full text-center pb-1 hover:bg-gray-700 px-2"
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/support"}>
                  Help Center
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
