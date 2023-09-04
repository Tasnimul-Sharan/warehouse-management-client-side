import React from "react";
import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import Reviews from "../Reviews/Reviews";
import WhyUs from "../WhyUs/WhyUs";
import Footer from "../../Shared/Footer/Footer";
import Contact from "../Contact/Contact";
import BusinessSummary from "../BusinessSummary/BusinessSummary";

const Home = () => {
  return (
    <div>
      {/* <div> */}
      <Banner />
      {/* </div>
      <div> */}
      <Inventories />
      {/* </div>
      <div> */}
      <BusinessSummary />
      <WhyUs />
      {/* </div>
      <div> */}
      <Reviews />
      {/* </div> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
