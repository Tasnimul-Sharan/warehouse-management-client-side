import "react-slideshow-image/dist/styles.css";
// import React from "react";
import { Fade } from "react-slideshow-image";
// import Banner from "../../../images/Banner.jpg";
// import Banner2 from "../../../images/Banner2.jpg";
// import Banner3 from "../../../images/Banner3.jpg";
import Banner1 from "../../../images/Banner1.jpg";

const fadeImages = [
  {
    img: { Banner1 },
    caption: "First Slide",
  },
  {
    img: { Banner1 },
    caption: "Second Slide",
  },
  {
    img: { Banner1 },
    caption: "Third Slide",
  },
];

const Banner = () => {
  return (
    // <section className="container">
    //   <div className=" d-flex align-item-center justify-content-between">
    //     <div>
    //       <h2>Electronics gadgets are avaikable</h2>
    //       <p>
    //         The modern computer with all its various gadgets and wonderful
    //         electronic facilities now makes it possible to preserve and
    //         reinvigorate all the cultural richness of mankind.
    //       </p>
    //     </div>
    //     <div>
    //       <img className="img-fluid w-25" src={Banner1} alt="" />
    //     </div>
    //   </div>
    // </section>
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage?.img} alt="" />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Banner;
