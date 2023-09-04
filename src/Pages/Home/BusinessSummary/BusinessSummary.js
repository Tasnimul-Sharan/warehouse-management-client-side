import React from "react";
import { FaHdd, FaMoneyCheck, FaGrin, FaUsers } from "react-icons/fa";
import "./BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center text-primary display-4 mb-4">
          Millions Business Trust Us
        </h1>
        <h3 className="text-center text-dark font-weight-bold mb-5">
          Understanding User Expectations
        </h3>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <FaHdd className="icon bg-primary" />
                <p className="custom-text-lg text-primary mt-3">1000+</p>
                <p className="text-dark fw-bold">Items</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <FaMoneyCheck className="icon bg-success" />
                <p className="custom-text-lg text-success mt-3">120M</p>
                <p className="text-dark fw-bold">Annual Revenue</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <FaGrin className="icon bg-info" />
                <p className="custom-text-lg text-info mt-3">30K</p>
                <p className="text-dark fw-bold">Reviews</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <FaUsers className="icon bg-warning" />
                <p className="custom-text-lg text-warning mt-3">5000+</p>
                <p className="text-dark fw-bold">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
