import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import DeleteOrderItems from "./DeleteOrderItems";
import auth from "../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const [deleting, setDeleting] = useState(null);
  const [reload, setReload] = useState(true);

  console.log(deleting);

  useEffect(() => {
    const getOrders = async () => {
      if (user) {
        const { data } = await axios.get(
          `https://warehouse-management-server-side-six.vercel.app/orders?email=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setOrders(data);
        console.log(data);
      }
    };
    getOrders();
  }, [user, reload]);

  console.log(orders);

  return (
    <div className="container my-5">
      <h1 className="text-2xl text-gray-900 my-5">
        Total Order : {orders?.length}
      </h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              <div>
                <th>Image</th>
              </div>
              <th>Price</th>
              <th>Items Name</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="w-25">
                    <img src={order.image} alt="avatar" className="img-fluid" />
                  </div>
                </td>
                <td>{order.price}</td>
                <td>{order.itemsname}</td>
                <td>
                  {!order.paid && (
                    <button
                      onClick={() => setDeleting(order)}
                      className="btn btn-xs btn-danger"
                    >
                      Delete
                    </button>
                  )}
                </td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-sm btn-success">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction ID:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleting && (
        <DeleteOrderItems
          deleting={deleting}
          setDeleting={setDeleting}
          setReload={setReload}
          reload={reload}
        />
      )}
    </div>
  );
};

export default MyOrders;
