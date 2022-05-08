import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary p-5 text-white">
      <h5>
        Copyright © {new Date().getFullYear()} All rights reserved. <br /> The
        Gadget zone
      </h5>
    </div>
  );
};

export default Footer;
