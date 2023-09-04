// import React from "react";
// import { toast } from "react-toastify";

// const DeleteOrderItems = ({ deleting, setDeleting, setReload, reload }) => {
//   const { itemsname, email } = deleting;
//   console.log(deleting);

//   const handleDelete = () => {
//     fetch(`https://warehouse-management-server-side-six.vercel.app/orders/${email}`, {
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
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const DeleteOrderItems = ({ deleting, setDeleting, setReload, reload }) => {
  const { itemsname, email } = deleting;

  const handleDelete = () => {
    fetch(
      `https://warehouse-management-server-side-six.vercel.app/orders/${email}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
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
    <Modal show={true} onHide={() => setDeleting(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="font-bold text-lg">
          Are you sure want to delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="py-4">{itemsname}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setDeleting(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(email)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteOrderItems;
