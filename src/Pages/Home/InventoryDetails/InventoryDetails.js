import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useInventoryDetails from "../../../Hooks/useInventoryDetails/useInventoryDetails";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useInventoryDetails(inventoryId);
  // const [user] = useAuthState(auth);

  const handleDelivered = (id) => {
    // useEffect(() => {
    fetch(`http://localhost:5000/management/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // const { data } = res;
        console.log(data);
        let quantity = 0;
        const exists = inventory.filter((invent) => invent._id === id);
        if (!exists) {
          quantity = quantity - 1;
        }
        setInventory(quantity);
      });
    // }, [inventoryId]);
  };

  //   // let new = [];
  //   if (!exists) {
  //     selectedItem.quantity = exists.quantity - 1;
  //     // new = [...inventory, selectedItem];
  //     setInventory(selectedItem.quantity);
  //   } else {
  //     const rest = inventory?.filter((invent) => invent._id !== selectedItem);
  //     exists.quantity = exists.quantity.value;
  //     // new = [...res, exists];\

  //     setInventory(...rest, exists.quantity);
  //   }
  // };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //in the backend place you have to use get.put for delivered and restock
    // if (user) console.log(user);

    // let quantity = 0;

    // const handleAddToCart = (selectedProduct) =>{
    //   console.log(selectedProduct);
    //   let newCart = [];
    //   const exists = cart.find(product => product._id === selectedProduct._id);
    //   if(!exists){
    //       selectedProduct.quantity = 1;
    //       newCart = [...cart, selectedProduct];
    //   }
    //   else{
    //       const rest = cart.filter(product => product._id !== selectedProduct._id);
    //       exists.quantity = exists.quantity + 1;
    //       newCart = [...rest, exists];
    //   }

    //   setCart(newCart);
    // addToDb(selectedProduct._id);
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
                onClick={() => handleDelivered(inventory?._id)}
                variant="outline-primary"
              >
                delivered
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="w-50 mx-auto col-lg-6">
          <h1>Restock the items</h1>
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Put a quantity"
              // value={inventory?.quantity.current.value}
              type="number"
              {...register("quantity")}
            />
            <input type="submit" value="restock" />
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
