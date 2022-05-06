import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import useInventoryDetails from "../../../Hooks/useInventoryDetails/useInventoryDetails";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
// import { async } from "@firebase/util";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useInventoryDetails(inventoryId);
  const [invent, setInvent] = useState({});

  const handleDelivered = async () => {
    // event.preventDefault();
    // let quantity = 0;
    const quantity = parseInt(inventory.quantity) - 1;
    const updateQuantity = await { quantity };
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
        setInvent(data);

        // let quantity = 0;
        // const delivered = invent?.filter((inven) => inven?._id !== inventoryId);
        // if (delivered) {
        //   // inventory.quantity = parseInt(inventory.quantity) - 1;
        //   return <Loading />;
        // }
        // setInvent(delivered);
      });
  };
  // useEffect(() => {
  // const getDelivered = async (id) => {
  //   let quantity = 0;
  //   quantity = parseInt(inventory.quantity) + 1;
  //   const updateQuantity = { quantity };
  //   const { data } = await axios.put(
  //     `http://localhost:5000/management/${id}`,
  //     updateQuantity
  //   );
  //   setInvent(data);
  // };
  // getDelivered();
  // }, []);

  //   Quantity এক-এক করে কমাতে হবে। আপনার পূর্বের Quantity থেকে ১ বিয়োগ করে দিবেন তারপর এই updated quantity কে API Call করে PUT Method এর মাধ্যমে backend এ পাঠিয়ে দিবেন এবং ওই নির্দিষ্ট Collection এর মাধ্যমে MongoDB তে পাঠিয়ে দিবেন।তাহলে Database এ Quantity update হয়ে যাবে।

  // *****************

  // আগের যে নম্বর টা আছে সেটা থেকে 1 বিয়োগ করে দিবেন, এরপর সেই ভ্যালু টা একটা api কল এর মাধ্যমে backend এ পাঠিয়ে ডাটাবেস এ আপডেট করে দিবেন।

  const { register, handleSubmit } = useForm();

  const onSubmit = async () => {
    // event.preventDefault();
    // console.log(data);
    const quantity = parseInt(inventory.quantity) + 1;
    const restockQuantity = await { quantity };
    console.log(restockQuantity);

    fetch(`http://localhost:5000/management/${inventoryId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(restockQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setInvent(data);

        // let quantity = 0;
        // const restock = inventory?.filter((invent) => invent._id !== data);
        // if (restock) {
        //   inventory.quantity = parseInt(inventory.quantity) + 1;
        // }
        // setInventory(quantity);
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
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Put a quantity"
              // value="quantity"
              type="number"
              {...register("quantity")}
            />
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
