import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
// import Banner1 from "../../../images/Banner1.jpg";
// import Banner2 from "../../../images/Banner2.jpg";
// import Banner3 from "../../../images/Banner3.jpg";

const fadeImages = [
  {
    url: "hhkjhkjhkj",
    // url: "../../../images/Banner1.jpg",
    caption: "First Slide",
  },
  {
    url: "hhkjhkjhkj",
    caption: "Second Slide",
  },
  {
    url: "hhkjhkjhkj",
    caption: "Third Slide",
  },
];

const Banner = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage?.url} alt="" />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Banner;
