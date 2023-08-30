// import React from "react";
// import { toast } from "react-toastify";

// const DeleteOrderItems = ({ deleting, setDeleting, setReload, reload }) => {
//   const { itemsname, email } = deleting;
//   console.log(deleting);

//   const handleDelete = () => {
//     fetch(`http://localhost:5000/orders/${email}`, {
//       method: "DELETE",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.deletedCount > 0) {
//           toast.success(`You have deleted ${itemsname}`);
//           setDeleting(null);
//           setReload(!reload);
//         }
//       });
//   };
//   return (
//     <div>
//       <input type="checkbox" id="delete-modal" className="modal-toggle" />
//       <div className="modal modal-bottom sm:modal-middle">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3 className="modal-title font-bold text-lg text-danger">
//                 Are you sure you want to delete?
//               </h3>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <p className="py-4 text-bold text-danger">{itemsname}</p>
//             </div>
//             <div className="modal-footer">
//               <button
//                 onClick={() => handleDelete(email)}
//                 className="btn btn-danger"
//               >
//                 Delete
//               </button>
//               <label htmlFor="delete-modal" className="btn btn-secondary">
//                 Cancel
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteOrderItems;

import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const DeleteOrderItems = ({
  deleting,
  setDeleting,
  setReload,
  reload,
  //   show,
  //   handleClose,
  showDeleteModal,
  setShowDeleteModal,
}) => {
  const { itemsname, email } = deleting;

  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleDelete = () => {
    fetch(`http://localhost:5000/orders/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`You have deleted ${itemsname}`);
          setDeleting(null);
          setReload(!reload);
        }
      });
  };

  return (
    // <>
    //   {/* <Button variant="primary" onClick={handleShow}>
    //     Launch demo modal
    //   </Button> */}

    //   <Modal show={show}>
    //     <Modal.Header>
    //       <Modal.Title> Are you sure you want to delete?</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>{itemsname}</Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="dark" onClick={handleClose}>
    //         Close
    //       </Button>
    //       <Button variant="danger" onClick={() => handleDelete(email)}>
    //         Delete
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </>
    <div
      className={`modal ${showDeleteModal ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: showDeleteModal ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Deletion</h5>
            <button
              type="button"
              className="close"
              onClick={() => setShowDeleteModal(true)}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this order?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(email)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderItems;
