import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faComputer,
  faFaceLaugh,
  faPhone,
  faTruckFast,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const WhyUs = () => {
  return (
    <section className="whyus container my-5">
      <div>
        <h3 className="border-bottom border-primary ms-3">
          Why to Choose Our Warehouse
        </h3>
        <div className="row">
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon className="Fontawesome" icon={faPhone} />
            </div>
            <h5>
              <span>Fast Communication</span>
            </h5>
            <p>
              We have made a team for Communication to communicate our customers
              for their products.If any customer order an item we instant call
              them and confirm the product
            </p>
          </div>
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon icon={faBusinessTime} className="Fontawesome" />
            </div>
            <h5>
              <span>12 Month Warranty</span>
            </h5>
            <p>
              We stand by the quality of our products, which is why we our proud
              to offer a 12 month guarantee on all products.
            </p>
          </div>
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon icon={faFaceLaugh} className="Fontawesome" />
            </div>
            <h5>
              <span>Great Low Prices</span>
            </h5>
            <p>
              We always try to make our customers be happy.With our bulk buying
              power of new stock, we are able can pass on great savings to you
              across all of our products.And also give some gift too.
            </p>
          </div>
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon icon={faTruckFast} className="Fontawesome" />
            </div>
            <h5>
              <span>Free Delivery</span>
            </h5>
            <p>
              We use a 2 person white glove delivery service to promise your
              gadgets arrives promptly and with great care.Anyone will get
              products in 24 hours.In this matter our suppliers are so serious
              about this.
            </p>
          </div>
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon icon={faUserSecret} className="Fontawesome" />
            </div>
            <h5>
              <span>Product Security</span>
            </h5>
            <p>
              We have made our product security so strong.Because our customers
              products are our responsibility.
            </p>
          </div>
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon icon={faComputer} className="Fontawesome" />
            </div>
            <h5>
              <span>Our Devices</span>
            </h5>
            <p>
              Our Electronices devices are world class.We stand behind our goods
              and services and want you to be satisfied with them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
