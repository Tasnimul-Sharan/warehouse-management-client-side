import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faUser } from "@fortawesome/free-solid-svg-icons";
import "./WhyUs.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import {
  faAddressBook,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
// ..
AOS.init();

const WhyUs = () => {
  // npm i --save @fortawesome/react-fontawesome@latest

  return (
    <section className="whyus">
      <div className="container">
        <h3>Why to Concern Gadget zone us</h3>
        <div className="row">
          <div
            className="col-lg-4 g-5 col-md-6 shadow-lg p-3 icon-box "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h5>
              <FontAwesomeIcon
                className="Fontawesome mx-5"
                icon={faAddressBook}
              />
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
            data-aos-delay="200"
          >
            <h5>
              <FontAwesomeIcon icon={faUser} className="Fontawesome mx-5" />
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
            data-aos-delay="300"
          >
            <h5>
              <FontAwesomeIcon icon={faUser} className="Fontawesome mx-5" />
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
          >
            <h5>
              <FontAwesomeIcon icon={faUser} className="Fontawesome mx-5" />
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
            data-aos-delay="500"
          >
            <h5>
              <FontAwesomeIcon icon={faUser} className="Fontawesome mx-5" />
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
            data-aos-delay="600"
          >
            <h5>
              <FontAwesomeIcon icon={faUser} className="Fontawesome mx-5" />
              <span>User</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              doloremque praesentium beatae asperiores, vitae voluptates,
              tempore adipisci sed animi, itaque ad unde nisi molestiae
              voluptatum similique repellendus nemo cumque qui?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
