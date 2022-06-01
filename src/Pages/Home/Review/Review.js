// import { faStar } from "@fortawesome/free-regular-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Card } from "react-bootstrap";

const Review = ({ review }) => {
  const { name, ratings, description, image } = review;
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3"
    >
      <Card bg="primary" text="white" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          className=" mx-auto img-fluid img-thumbnail rounded w-50"
          src={image}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5 className="m-2">
            ratings: {ratings} <br />
            <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
          </h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
