import React, { useEffect, useState } from "react";
import UseOrderRow from "./UseOrderRow";
import DeleteAllOrders from "./DeleteAllOrders";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deleteOrders, setDeleteOrders] = useState(true);
  const [reload, setReload] = useState(true);
  const [shipped, setShipped] = useState("");

  useEffect(() => {
    fetch("https://warehouse-management-server-side-six.vercel.app/allOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [reload]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">All the Orders: {orders?.length}</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th></th>
              <div>
                <th>Image</th>
              </div>
              <th>Items name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <UseOrderRow
                key={order._id}
                order={order}
                index={index}
                setDeleteOrders={setDeleteOrders}
                setShipped={setShipped}
                shipped={shipped}
                setReload={setReload}
                reload={reload}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrders && (
        <DeleteAllOrders
          deleteOrders={deleteOrders}
          setDeleteOrders={setDeleteOrders}
          setReload={setReload}
          reload={reload}
        />
      )}
    </div>
  );
};

export default ManageAllOrders;
