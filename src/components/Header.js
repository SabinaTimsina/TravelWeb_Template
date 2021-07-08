import React from "react";
import "../CSS/TopMid.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-capitalize" href="#">
          <h2 className="text-capitalize display-7">Shukla travelling house</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link headerclr active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link headerclr text-capitalize" href="#">
                About us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link headerclr dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link headerclr text-capitalize" href="#">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
