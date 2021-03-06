import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventories from "../../Hooks/useInventories/useInventories";

const ManageInventories = () => {
  const [inventories, setInventories] = useInventories();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      fetch(`https://intense-headland-97851.herokuapp.com/management/${id}`, {
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
    <div className="container-fluid">
      <div className="row ms-3">
        {inventories.map((inventory) => (
          <div
            className="g-2 col-sm-12 col-md-6 col-lg-3 mb-3"
            key={inventory._id}
            inventory={inventory}
          >
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={inventory.image} />
              <Card.Body>
                <Card.Title>{inventory.name}</Card.Title>
                <Card.Text>{inventory.description}</Card.Text>
                <h5>quantity: {inventory.quantity}</h5>
                <h5>price: {inventory.price}</h5>
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
      <Link to="/addinventory">
        <button className="btn btn-primary">Add a new inventory</button>
      </Link>
    </div>
  );
};

export default ManageInventories;
