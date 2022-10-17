import React, { useState } from "react";
import logo from "./assests/logo.gif";
import "./assests/style.css";

export default function NavBar() {
  const [items, setItems] = useState(false);
  return (
    <>
      <nav className="vs-navbar  flex-col navbar   sticky-top navBar">
        <div className="flexwrap  navbar-container container-fluid">
          <a className="navbar-brand " href="#">
            <img src={logo} alt="" />
          </a>
          
          <button
            className="navbar-toggler togg"
            type="button"
            onClick={() => setItems(!items)}
          >
            {items ? (
              <span className="navbar-toggler-icon  ">
                <div className="links">
                  <ul>
                    <li>
                      <a href="#">
                        login
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        blog
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        about us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="an">
                        media
                      </a>
                    </li>
                    <li>
                      <a href="#" className="an">
                        careers
                      </a>
                    </li>
                  </ul>
                </div>
              </span>
            ) : (
              <span className="navbar-toggler-icon "></span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}




            // data-bs-toggle="offcanvas"
            // data-bs-target="#offcanvasDarkNavbar"
            // aria-controls="offcanvasDarkNavbar"