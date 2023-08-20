import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

import { useEffect, useState } from "react";

const InventoryDetails = () => {
  const { inventoryId } = useParams();

  const [inventory, setInventory] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/management/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [reload]);

  const handleDelivered = async () => {
    const quantity = parseInt(inventory.quantity) - 1;
    const updateQuantity = { quantity };
    console.log(updateQuantity);
    fetch(`http://localhost:5000/management/${inventoryId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
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

    fetch(`http://localhost:5000/management/${inventoryId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(stockQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReload(!reload);
      });
  };

  return (
    <section>
      <div className="container row">
        <div className="col-lg-8">
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
        <div className=" col-lg-4 my-5">
          <h1>Restock the items</h1>
          <form className="d-flex flex-column" onSubmit={restock}>
            <input placeholder="Put a quantity" type="number" name="quantity" />
            <input className="btn btn-primary" type="submit" value="Restock" />
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
