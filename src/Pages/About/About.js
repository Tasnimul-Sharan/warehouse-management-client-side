import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const About = () => {
  const [suppliers, setSupplier] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/supplier").then((res) => {
      const { data } = res;
      setSupplier(data);
    });
  }, []);
  return (
    <section>
      <div className="bg-primary text-white mt-1 p-5">
        <h1>
          About <br /> The Gadget Zone
        </h1>
        <p>The Gadget zone is kind of Warehouse</p>
      </div>
      <div className="container mt-3">
        <h1>Our Honorable suppliers</h1>
        <div className="row ms-2">
          {suppliers.map((supplier) => (
            <div
              className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3"
              key={supplier?._id}
              supplier={supplier}
            >
              <Card bg="primary" text="white" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={supplier?.image} />
                <Card.Body>
                  <Card.Title>{supplier?.name}</Card.Title>
                  <h5>{supplier?.address}</h5>
                  <h5>{supplier?.age}</h5>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
