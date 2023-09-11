import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const DeleteAllOrders = ({
  deleteOrders,
  setDeleteOrders,
  reload,
  setReload,
}) => {
  const { itemsname, _id } = deleteOrders;
  console.log(deleteOrders);

  const handleDelete = (id) => {
    fetch(
      `https://warehouse-management-server-side-six.vercel.app/allOrders/${id}`,
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
        if (data.deletedCount) {
          toast.success("You have deleted the parts");
          setDeleteOrders(false);
          setReload(!reload);
        }
      });
  };

  return (
    <Modal show={true} onHide={() => setDeleteOrders(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="font-bold text-lg">
          Are you sure want to delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="py-4">{itemsname}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setDeleteOrders(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(_id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAllOrders;
