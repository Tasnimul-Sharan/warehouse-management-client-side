import { useForm } from "react-hook-form";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useInventoryDetails from "../../../Hooks/useInventoryDetails/useInventoryDetails";
import { Button, Card } from "react-bootstrap";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [inventory] = useInventoryDetails(inventoryId);
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    //in the backend place you have to use get.put for delivered and restock
    if (user) console.log(user);
  };

  return (
    <section>
      <div className="container row">
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input
          {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age")} />
          <input type="submit" />
        </form> */}
        {/* className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3" */}
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
                // onClick={() => navigateToDetails(_id)}
                variant="outline-primary"
              >
                Update
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
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age")} />
            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default InventoryDetails;
