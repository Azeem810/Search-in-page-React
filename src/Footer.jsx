import React from "react";
import logo from "./assests/logo.gif";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white foot">
        <div className="img1">
          <img src={logo} alt=" " />
        </div>

        <ul className="ul-style ">
          <li>
            <a href="#" className="a-style">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="a-style">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="a-style">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="a-style">
              Contact
            </a>
          </li>
        </ul>

        <div className="text-center p-2 ">Azeem © 2022 Copyright:</div>
      </footer>
    </>
  );
}
