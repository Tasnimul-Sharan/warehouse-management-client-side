import React from "react";

const UseOrderRow = ({
  order,
  index,
  setDeleteOrders,
  setShipped,
  shipped,
  setReload,
  reload,
}) => {
  const { image, price, itemsname, _id } = order;

  const handleShipped = () => {
    fetch(`http://localhost:5000/payments/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (order?.paid) {
          setShipped("shipped");
          setReload(!reload);
        }
      });
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        {/* <div className="avatar"> */}
        <div className="w-25">
          <img src={image} alt="avatar" className="img-fluid" />
        </div>
        {/* </div> */}
      </td>
      <td>{itemsname}</td>
      <td>${price}</td>
      <td>
        <button
          onClick={() => setDeleteOrders(order)}
          className="btn btn-xs btn-danger"
        >
          Delete
        </button>
      </td>
      <td>
        {order.price && !order.paid && (
          <div>
            <p>
              <span className="text-danger">unpaid</span>
            </p>
          </div>
        )}
        {order.price && order.paid && (
          <div>
            <p>
              <button
                onClick={() => handleShipped(shipped)}
                className="btn btn-success"
              >
                {order?.status ? "shipped" : order?.paid ? "pending" : "unpaid"}
              </button>
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default UseOrderRow;
