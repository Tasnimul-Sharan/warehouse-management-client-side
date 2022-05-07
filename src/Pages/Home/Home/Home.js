import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { Carousel, Fade } from "react-bootstrap";
import Inventories from "../Inventories/Inventories";
import Reviews from "../Reviews/Reviews";
import Banner1 from "../../../images/Banner1.jpg";
// import Banner2 from "../../../images/Banner2.jpg";
// import Banner3 from "../../../images/Banner3.jpg";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  // const handle
  const [state, setState] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setState(selectedIndex);
  };
  return (
    <section>
      <div>
        {/* <Banner /> */}
        <Carousel
          activeIndex={state}
          onSelect={handleSelect}
          fade
          variant="dark"
        >
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src={Banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/group-home-appliances-pink-studio-background_241146-976.jpg?size=626&ext=jpg&uid=R67494978&ga=GA1.2.986424658.1648222770"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <Inventories />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <Reviews />
      </div>
    </section>
  );
};

export default Home;
