import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
// import { reload } from "firebase/auth";
// import { async } from "@firebase/util";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  // const [inventory] = useInventoryDetails(inventoryId);
  // const [reload, setReload] = useState(true);

  const [inventory, setInventory] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch(
      `https://intense-headland-97851.herokuapp.com/management/${inventoryId}`
    )
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [reload]);

  const handleDelivered = async () => {
    // event.preventDefault();
    // let quantity = 0;
    const quantity = parseInt(inventory.quantity) - 1;
    const updateQuantity = { quantity };
    console.log(updateQuantity);
    fetch(
      `https://intense-headland-97851.herokuapp.com/management/${inventoryId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
      });
  };

  const restock = (e) => {
    e.preventDefault();
    const reStockQuantity = e.target.quantity.value;
    const quantity = parseInt(inventory.quantity) + parseInt(reStockQuantity);
    const stockQuantity = { quantity };
    console.log(stockQuantity);

    fetch(
      `https://intense-headland-97851.herokuapp.com/management/${inventoryId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(stockQuantity),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReload(!reload);
      });
  };

  return (
    <section>
      <div className="container row">
        <div className="col-lg-6">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={inventory?.image} />
            <Card.Body>
              <h5>Id : {inventory?._id}</h5>
              <Card.Title>{inventory?.name}</Card.Title>
              <Card.Text>{inventory?.description}</Card.Text>
              <h5>{inventory?.quantity}</h5>
              <h5>{inventory?.price}</h5>
              <h5>{inventory?.SuplierName}</h5>
              <Button
                onClick={() => handleDelivered(inventory._id)}
                variant="outline-primary"
              >
                delivered
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className=" col-lg-6 my-5">
          <h1>Restock the items</h1>
          <form className="d-flex flex-column" onSubmit={restock}>
            <input placeholder="Put a quantity" type="number" name="quantity" />
            <input
              className="btn btn-outline-primary"
              type="submit"
              value="restock"
            />
          </form>
        </div>
      </div>
      <Link to="/manageinventory">
        <button className="btn btn-primary">Manage Inventories</button>
      </Link>
    </section>
  );
};

export default InventoryDetails;
