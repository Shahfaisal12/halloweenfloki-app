import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top " id="navbar">
        <div className="container">
          <a className="navbar-brand p-0" href="/">
            <img className="img-fluid"
              src="https://halloweenfloki.co/wp-content/uploads/2022/08/FLOH_Logo-removebg-preview.png"
              style={{ width: "90px" }}
              alt="logo"
            />
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/why">
                  Documents
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                {/* <a target="_blank" rel="" href="/">MINT FLOH RAFFLE NFT</a> */}
                <Button className="btn-header">MINT FLOH RAFFLE NFT</Button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
