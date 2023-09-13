import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner5 from "../../../images/Banner5.jpg";
import Banner3 from "../../../images/Banner3.png";
import Banner1 from "../../../images/banner1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="slide-container bg-primary text-white py-5">
      <Fade>
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="row m-5 d-flex align-items-center"
        >
          <div className="text-start col-lg-6 mb-3">
            <h1>
              Find your perfect Gadget <br /> At a lower price
            </h1>
            <p>
              Browse our selection of refurbished gadgets at a lower prices than
              the high street.
            </p>
            <Link to="/inventory/:inventoryId">
              <button className="btn btn-danger p-2">
                See Gadgets
                <FontAwesomeIcon className="ms-5" icon={faArrowRight} />
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid w-75" src={Banner1} alt="" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="row m-5 d-flex align-items-center"
        >
          <div className="text-start col-lg-6 mb-3">
            <h1>Create your own Electonic gadgets business</h1>
            <p>
              We have a huge Quantity of gadgets so anyone start his own
              business.
            </p>
            <Link to="/inventory/:inventoryId">
              <button className="btn btn-danger p-2">
                See Gadgets
                <FontAwesomeIcon className="ms-5" icon={faArrowRight} />
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid w-75" src={Banner5} alt="" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="row m-5 d-flex align-items-center"
        >
          <div className="text-start col-lg-6 mb-3">
            <h1>
              Experience the latest <br /> In upscaling Technology
            </h1>
            <p>The new era of Electronics are starts now new devices.</p>
            <Link to="/inventory/:inventoryId">
              <button className="btn btn-danger p-2">
                See Gadgets
                <FontAwesomeIcon
                  className="ms-5 border rounded-5"
                  icon={faArrowRight}
                />
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid w-100" src={Banner3} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
