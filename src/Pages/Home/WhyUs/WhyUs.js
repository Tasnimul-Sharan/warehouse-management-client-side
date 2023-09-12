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
import "./WhyUs.css"; // Import your CSS file
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const WhyUs = () => {
  return (
    <section className="whyus container my-5">
      <div>
        <h3 className="ms-3 ">Why Choose Our Warehouse</h3>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="icon-box">
              <FontAwesomeIcon className="Fontawesome" icon={faPhone} />
              <h5>Fast Communication</h5>
              <p>
                We have a dedicated team for communication with our customers.
                If any customer orders an item, we instantly call them to
                confirm the product.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="icon-box">
              <FontAwesomeIcon icon={faBusinessTime} className="Fontawesome" />
              <h5>12 Month Warranty</h5>
              <p>
                We stand by the quality of our products, which is why we are
                proud to offer a 12-month guarantee on all products.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className="icon-box">
              <FontAwesomeIcon icon={faFaceLaugh} className="Fontawesome" />
              <h5>Great Low Prices</h5>
              <p>
                We always strive to make our customers happy. With our bulk
                buying power of new stock, we can pass on great savings to you
                and even provide some special gifts.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="icon-box">
              <FontAwesomeIcon icon={faTruckFast} className="Fontawesome" />
              <h5>Fast Delivery</h5>
              <p>
                We use a 2-person white glove delivery service to ensure your
                gadgets arrive promptly and with great care. You'll receive your
                products within 24 hours.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="icon-box">
              <FontAwesomeIcon icon={faUserSecret} className="Fontawesome" />
              <h5>Product Security</h5>
              <p>
                We have implemented strong product security because our
                customers' products are our responsibility.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div className="icon-box">
              <FontAwesomeIcon icon={faComputer} className="Fontawesome" />
              <h5>Our Devices</h5>
              <p>
                Our electronic devices are world-class. We stand behind our
                goods and services and want you to be satisfied with them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
