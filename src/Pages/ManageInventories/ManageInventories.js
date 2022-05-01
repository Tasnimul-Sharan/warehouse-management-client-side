import React from "react";
import { Button, Card } from "react-bootstrap";
import useInventories from "../../Hooks/useInventories/useInventories";

const ManageInventories = () => {
  const [inventories, setInventories] = useInventories();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      fetch(`http://localhost:5000/management/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(remaining);
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        {inventories.map((inventory) => (
          <div
            className="g-5 col-sm-12 col-md-6 col-lg-3 mb-3"
            key={inventory._id}
            inventory={inventory}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={inventory.image} />
              <Card.Body>
                <Card.Title>{inventory.name}</Card.Title>
                <Card.Text>{inventory.description}</Card.Text>
                <h5>{inventory.quantity}</h5>
                <h5>{inventory.price}</h5>
                <h5>{inventory.SuplierName}</h5>
                <Button
                  onClick={() => handleDelete(inventory._id)}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
