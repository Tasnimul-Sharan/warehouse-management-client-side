// import { Link, useParams } from "react-router-dom";
// import { Button, Card } from "react-bootstrap";

// import { useEffect, useState } from "react";

// const InventoryDetails = () => {
//   const { inventoryId } = useParams();

//   const [inventory, setInventory] = useState([]);
//   const [reload, setReload] = useState(true);

//   useEffect(() => {
//     fetch(`https://warehouse-management-server-side-six.vercel.app/management/${inventoryId}`)
//       .then((res) => res.json())
//       .then((data) => setInventory(data));
//   }, [reload]);

//   const handleDelivered = async () => {
//     const quantity = parseInt(inventory.quantity) - 1;
//     const updateQuantity = { quantity };
//     console.log(updateQuantity);
//     fetch(`https://warehouse-management-server-side-six.vercel.app/management/${inventoryId}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(updateQuantity),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setReload(!reload);
//       });
//   };

//   const restock = (e) => {
//     e.preventDefault();
//     const reStockQuantity = e.target.quantity.value;
//     const quantity = parseInt(inventory.quantity) + parseInt(reStockQuantity);
//     const stockQuantity = { quantity };
//     console.log(stockQuantity);

//     fetch(`https://warehouse-management-server-side-six.vercel.app/management/${inventoryId}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(stockQuantity),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setReload(!reload);
//       });
//   };

//   return (
//     <section>
//       <div className="container row">
//         <div className="col-lg-8">
//           <Card style={{ width: "20rem" }}>
//             <Card.Img variant="top" src={inventory?.image} />
//             <Card.Body>
//               <h5>Id : {inventory?._id}</h5>
//               <Card.Title>{inventory?.name}</Card.Title>
//               <Card.Text>{inventory?.description}</Card.Text>
//               <h5>{inventory?.quantity}</h5>
//               <h5>{inventory?.price}</h5>
//               <h5>{inventory?.SuplierName}</h5>
//               <Button
//                 onClick={() => handleDelivered(inventory._id)}
//                 variant="outline-primary"
//               >
//                 delivered
//               </Button>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className=" col-lg-4 my-5">
//           <h1>Restock the items</h1>
//           <form className="d-flex flex-column" onSubmit={restock}>
//             <input placeholder="Put a quantity" type="number" name="quantity" />
//             <input className="btn btn-primary" type="submit" value="Restock" />
//           </form>
//         </div>
//       </div>
//       <Link to="/manageinventory">
//         <button className="btn btn-primary">Manage Inventories</button>
//       </Link>
//     </section>
//   );
// };

// export default InventoryDetails;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import swal from "sweetalert";

const InventoryDetails = () => {
  const { inventoryId } = useParams();

  const [user] = useAuthState(auth);
  const [quantity, setQuantity] = useState(0);

  const {
    data: inventory,
    isLoading,
    refetch,
  } = useQuery(["management", inventoryId], () =>
    fetch(
      `https://warehouse-management-server-side-six.vercel.app/management/${inventoryId}`
    ).then((res) => res.json())
  );

  useEffect(() => {
    if (inventory?.minimumQuantity) {
      setQuantity(inventory.minimumQuantity);
    }
  }, [inventory]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        "https://warehouse-management-server-side-six.vercel.app/orders",
        data
      )
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (
          quantity >= inventory?.minimumQuantity &&
          quantity <= inventory.availableQuantity
        ) {
          // toast.success("Your order has been placed");
          swal("Thanks for order", "Your order has been placed", "success");
        } else {
          // toast.error(
          //   "You have to purchase at least the minimum quantity or available quantity"
          // );
          swal(
            "Alert!",
            "You have to purchase at least the minimum quantity or available quantity!",
            "error"
          );
        }

        refetch();
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 order-lg-2">
          <div className="card mb-3 shadow-lg">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        {...register("email")}
                        value={user.email}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        {...register("name")}
                        value={user.displayName}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        {...register("itemsname")}
                        value={inventory?.name}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        {...register("image")}
                        value={inventory?.image}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        {...register("price")}
                        value={inventory?.price}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        {...register("address")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone number"
                        {...register("number")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={inventory?.minimumQuantity}
                        onChange={(e) => {
                          if (
                            e.target.value < inventory.minimumQuantity ||
                            e.target.value > inventory.availableQuantity
                          ) {
                            // toast.error(
                            //   "You have to purchase at least the minimum quantity or available quantity"
                            // );
                            swal(
                              "Alert!",
                              "You have to order at least the minimum quantity or available quantity!",
                              "error"
                            );
                          }
                          setQuantity(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        disabled={
                          quantity < inventory.minimumQuantity ||
                          quantity > inventory.availableQuantity
                        }
                        className="btn btn-primary w-100"
                      >
                        Place the Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="card mb-3 shadow-lg">
            <div className="card-body text-center">
              <img
                src={inventory?.image}
                alt="Product"
                className="img-fluid rounded-xl"
              />
              <h2 className="card-title">{inventory?.name}</h2>
              <p>Description: {inventory.description}</p>
              <p>Price: ${inventory.price}</p>
              <p>Available Quantity: {inventory?.availableQuantity}</p>
              <p>Minimum Quantity: {inventory?.minimumQuantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
