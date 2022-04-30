import React from "react";
import { Button, Card } from "react-bootstrap";

const Item = ({ inventory }) => {
  const { _id, name, image, description, price, quantity, SuplierName } =
    inventory;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5>{quantity}</h5>
          <h5>{price}</h5>
          <h5>{SuplierName}</h5>
          <h5>{name}</h5>
          <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
