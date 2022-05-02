import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ inventory }) => {
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`details/${id}`);
  };

  const { _id, name, image, description, price, quantity, SuplierName } =
    inventory;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3">
      <Card className="shadow-lg" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5>{quantity}</h5>
          <h5>{price}</h5>
          <h5>{SuplierName}</h5>
          <Button
            onClick={() => navigateToDetails(_id)}
            variant="outline-primary"
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
