import React from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
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
    <div className="container-fluid">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>SuplierName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <tr key={inventory._id} inventory={inventory}>
              <td>
                <img className="w-50 img-fluid" src={inventory.image} alt="" />
              </td>
              <td>{inventory.name}</td>
              <td>{inventory.description}</td>
              <td>{inventory.quantity}</td>
              <td>{inventory.price}</td>
              <td>{inventory.SuplierName}</td>
              <td>
                <Button
                  onClick={() => handleDelete(inventory._id)}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/addinventory">
        <button className="btn btn-primary">Add a new inventory</button>
      </Link>
    </div>
  );
};

export default ManageInventories;
