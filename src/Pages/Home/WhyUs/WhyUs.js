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
    // <div>
    //   <section id="services" className="services my-5">
    //     <div className="container">
    //       <div className="section-title">
    //         <h2>Why to concern us</h2>
    //       </div>
    //       <div className="row">
    //         <div
    //           className="col-lg-4 col-md-6 icon-box shadow-lg"
    //           //   data-aos="fade-up"
    //           data-aos="flip-up"
    //           //   data-aos-offset="200"
    //           data-aos-delay="50"
    //           //   data-aos-duration="1000"
    //           //   data-aos-easing="ease-in-out"
    //           data-aos-mirror="true"

    //           //   data-aos-once="false"
    //           //   data-aos-anchor-placement="top-center"
    //         >
    //           {/* <div className="icon w-100">
    //             <FontAwesomeIcon icon={faComputer} />
    //           </div> */}
    //           <h4 className="">
    //             <FontAwesomeIcon
    //               className="mx-2 btn btn-primary "
    //               icon={faComputer}
    //             ></FontAwesomeIcon>
    //             <span>Lorem Ipsum</span>
    //           </h4>
    //           <p className="description">
    //             Voluptatum deleniti atque corrupti quos dolores et quas
    //             molestias excepturi sint occaecati cupiditate non provident
    //           </p>
    //         </div>
    //         <div
    //           className="col-lg-4 col-md-6 icon-box"
    //           //   data-aos="fade-up"
    //           data-aos="flip-up"
    //           data-aos-delay="100"
    //         >
    //           <h4 className="title">
    //             <FontAwesomeIcon
    //               // className="bg-primary"
    //               fontSize={"40px"}
    //               // color={"blue"}
    //               icon={faComputer}
    //             ></FontAwesomeIcon>
    //             <span>Dolor Sitema</span>
    //           </h4>
    //           <p className="description">
    //             Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //             aliquip ex ea commodo consequat tarad limino ata
    //           </p>
    //         </div>
    //         <div
    //           className="col-lg-4 col-md-6 icon-box"
    //           data-aos="fade-up"
    //           data-aos-delay="200"
    //         >
    //           <h4 className="title">
    //             <FontAwesomeIcon className="w-50" icon={faComputer}>
    //               {/* <i className="fa-solid fa-computer"></i> */}
    //             </FontAwesomeIcon>
    //             <span href="">Sed ut perspiciatis</span>
    //           </h4>
    //           <p className="description">
    //             Duis aute irure dolor in reprehenderit in voluptate velit esse
    //             cillum dolore eu fugiat nulla pariatur
    //           </p>
    //         </div>
    //         <div
    //           className="col-lg-4 col-md-6 icon-box"
    //           data-aos="fade-up"
    //           data-aos-delay="300"
    //         >
    //           <h4 className="title">
    //             <FontAwesomeIcon className="w-50" icon={faComputer}>
    //               {/* <i className="fa-solid fa-computer"></i> */}
    //             </FontAwesomeIcon>
    //             <span>Magni Dolores</span>
    //           </h4>
    //           <p className="description">
    //             Excepteur sint occaecat cupidatat non proident, sunt in culpa
    //             qui officia deserunt mollit anim id est laborum
    //           </p>
    //         </div>
    //         <div
    //           className="col-lg-4 col-md-6 icon-box"
    //           data-aos="fade-up"
    //           data-aos-delay="400"
    //         >
    //           <h4 className="title">
    //             <FontAwesomeIcon
    //               className="mx-2 btn btn-outline-primary "
    //               icon={faComputer}
    //             ></FontAwesomeIcon>
    //             <span>Nemo Enim</span>
    //           </h4>
    //           <p className="description">
    //             At vero eos et accusamus et iusto odio dignissimos ducimus qui
    //             blanditiis praesentium voluptatum deleniti atque
    //           </p>
    //         </div>
    //         <div
    //           className="col-lg-4 col-md-6 icon-box"
    //           data-aos="fade-up"
    //           data-aos-delay="500"
    //         >
    //           <h4 className="title">
    //             <FontAwesomeIcon
    //               className="mx-2 btn btn-outline-primary "
    //               icon={faComputer}
    //             ></FontAwesomeIcon>
    //             <span>Eiusmod Tempor</span>
    //           </h4>
    //           <p className="description">
    //             Et harum quidem rerum facilis est et expedita distinctio. Nam
    //             libero tempore, cum soluta nobis est eligendi
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    <section className="whyus">
      <div className="container">
        <h3>Why to Concern us</h3>
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
