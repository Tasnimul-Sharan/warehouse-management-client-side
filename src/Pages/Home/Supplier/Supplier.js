import React from "react";
import { Card } from "react-bootstrap";

const Supplier = ({ supplier }) => {
  const { name, age, address, description, image } = supplier;
  return (
    <div
      data-aos="fade-up"
      // data-aos-offset="200"
      data-aos-delay="100"
      data-aos-duration="100"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
      className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3"
    >
      <Card bg="primary" text="white" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>Address: {address}</p>
          <h5>Age: {age}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Supplier;
