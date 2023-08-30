import React from "react";
import { Button } from "react-bootstrap";

const MyItemRow = ({ handleDelete, item }) => {
  const { image, name, price, description, SuplierName, quantity } = item;
  return (
    <tr>
      <td>
        {/* <img className="w-50" src={image} alt="" /> */}
        {/* <div className="w-25"> */}
        <img src={image} alt="avatar" className="w-25 img-fluid" />
        {/* </div> */}
      </td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{SuplierName}</td>
      <td>
        <Button onClick={() => handleDelete(item._id)} variant="outline-danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default MyItemRow;
