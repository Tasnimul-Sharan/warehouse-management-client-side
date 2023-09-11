import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ inventory }) => {
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`details/${id}`);
  };

  const {
    _id,
    name,
    image,
    description,
    price,
    availableQuantity,
    minimumQuantity,
    SuplierName,
  } = inventory;
  return (
    <CardGroup
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3"
    >
      <Card className="shadow-lg" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5>price: ${price}</h5>
          <p>Available Quantity: {availableQuantity}</p>
          <p>Minimum Quantity: {minimumQuantity}</p>
          <h5>{SuplierName}</h5>
        </Card.Body>
        <Card.Footer className="border-0">
          <Button
            onClick={() => navigateToDetails(_id)}
            variant="outline-primary"
          >
            Order now
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Item;
