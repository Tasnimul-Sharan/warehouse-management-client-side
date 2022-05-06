import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faCalendar,
  faClock,
  faClockRotateLeft,
  faComputer,
  faDesktop,
  faMobilePhone,
  faPhone,
  faPhoneVolume,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyUs.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import {
  faAddressBook,
  faClockFour,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
// ..
AOS.init();

const WhyUs = () => {
  // npm i --save @fortawesome/react-fontawesome@latest

  return (
    <section className="whyus container my-5">
      <div>
        <h3 className="border-bottom border-primary w-50">
          Why to Concern Our Warehouse
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
            <p>fast communication</p>
          </div>
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="Fontawesome"
              />
            </div>
            <h5>
              <span>Open/close</span>
            </h5>
            <p>Our suoort system is 24 hours open</p>
          </div>
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon icon={faCalendar} className="Fontawesome" />
            </div>
            <h5>
              <span>User</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              doloremque praesentium beatae asperiores, vitae voluptates,
              tempore adipisci sed animi, itaque ad unde nisi molestiae
              voluptatum similique repellendus nemo cumque qui?
            </p>
          </div>
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div>
              <FontAwesomeIcon icon={faBusinessTime} className="Fontawesome" />
            </div>
            <h5>
              <span>User</span>
            </h5>
            <p></p>
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
            <p>Our Security system is so strong.</p>
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
            <p>Our Electronices devices are world class.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
