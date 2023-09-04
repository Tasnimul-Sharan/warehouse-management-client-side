import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png"; // Replace with your image import

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 text-center">
            <img
              src={logo}
              alt="Company Logo"
              className="img-fluid w-50 mb-3"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Marketing
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Advertisement
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Company</h5>
            <ul className="list-unstyled text-decoration-none">
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Press kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Legal</h5>
            <ul className="list-unstyled text-decoration-none">
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/go" className="text-white text-decoration-none">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-white">
              Copyright © {new Date().getFullYear()} - All rights reserved
              <br />
              The Gadget Zone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
