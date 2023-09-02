import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const DeleteManagementInventories = ({
  deleteInventories,
  setDeleteInventories,
  reload,
  setReload,
  inventories,
  setInventories,
}) => {
  const { name, _id } = inventories;
  console.log(inventories);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/management/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = inventories.filter(
          (inventory) => inventory._id !== id
        );
        setInventories(remaining);
        if (data.deletedCount) {
          toast.success("You have deleted the parts");
          setDeleteInventories(false);
          setReload(!reload);
        }
      });
  };

  return (
    <Modal show={true} onHide={() => setDeleteInventories(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="font-bold text-lg">
          Are you sure want to delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="py-4">{name}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setDeleteInventories(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(_id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteManagementInventories;
