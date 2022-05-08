import React from "react";
import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import Reviews from "../Reviews/Reviews";
import WhyUs from "../WhyUs/WhyUs";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <section>
      <div>
        <Banner />
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
      <Footer />
    </section>
  );
};

export default Home;
