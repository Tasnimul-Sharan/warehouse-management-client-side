import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner2 from "../../../images/Banner2.jpg";
import Banner3 from "../../../images/Banner3.jpg";
import Banner1 from "../../../images/Banner1.jpg";

const Banner = () => {
  return (
    <div className="slide-container bg-primary text-white">
      <Fade>
        <div className="row m-5 d-flex align-items-center">
          <div className="col-lg-6">
            <h1>
              Find your perfect Gadget <br /> At a lower price
            </h1>
            <p>
              Browse our selection of refurbished gadgets at a lower prices than
              the high street.
            </p>
            <button className="btn btn-outline-primary">Know more</button>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid w-75" src={Banner1} alt="" />
          </div>
        </div>
        <div className="row m-5 d-flex align-items-center">
          <div className="col-lg-6">
            <h1>Create your own Electonic gadgets business</h1>
            <p>
              We have a huge Quantity of gadgets so anyone start his own
              business.
            </p>
            <button className="btn btn-outline-primary">Know more</button>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid w-75" src={Banner2} alt="" />
          </div>
        </div>
        <div className="row m-5 d-flex align-items-center">
          <div className="col-lg-6">
            <h1>
              Experience the latest <br /> In upscaling Technology
            </h1>
            <p>The new ara of Electronics are starts now new devices.</p>
            <button className="btn btn-danger p-2">Know more</button>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid w-75" src={Banner3} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
