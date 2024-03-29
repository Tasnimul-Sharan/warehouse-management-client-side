import React from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventories from "../../Hooks/useInventories/useInventories";
import { useState } from "react";
import DeleteManagementInventories from "./DeleteManagementInventories";

const ManageInventories = () => {
  const [inventories, setInventories] = useInventories();
  // const [deleteInventories, setDeleteInventories] = useState(true);
  // const [reload, setReload] = useState(true);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      fetch(
        `https://warehouse-management-server-side-six.vercel.app/management/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
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
  console.log(inventories);
  return (
    <div className="container-fluid">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Minimum Quantity</th>
            <th>SuplierName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <tr key={inventory._id} inventory={inventory}>
              <td>
                <img className="w-75 img-fluid" src={inventory.image} alt="" />
              </td>
              <td>{inventory.name}</td>
              <td>{inventory.description}</td>
              <td>${inventory.price}</td>
              <td>{inventory.availableQuantity}</td>
              <td>{inventory.minimumQuantity}</td>
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
      {/* {deleteInventories && (
        <DeleteManagementInventories
          deleteInventories={deleteInventories}
          setDeleteInventories={setDeleteInventories}
          setReload={setReload}
          reload={reload}
          setInventories={setInventories}
          inventories={inventories}
        />
      )} */}
      <Link to="/addinventory">
        <button className="btn btn-primary">Add a new inventory</button>
      </Link>
    </div>
  );
};

export default ManageInventories;
