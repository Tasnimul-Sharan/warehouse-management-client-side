import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./AddInventoryItems.css";

const AddInventoryItems = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/item", data).then((res) => {
      const { data } = res;
      console.log(data);
      if (data) {
        toast.success("You have added a new item, Yeah!!!");
      }
    });
  };

  return (
    <div className="form-group mx-auto container-fluid row my-5">
      <h1>Add a new item</h1>
      <Form
        className="shadow-lg p-5 d-flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Enter Name"
          className="mb-2 from-control"
          value={user?.displayName}
          type="text"
          {...register("user name")}
          required
        />
        <input
          placeholder="Enter Email"
          className="mb-2"
          type="email"
          value={user?.email}
          {...register("email")}
        />
        <input
          placeholder="Image Url"
          className="mb-2"
          type="text"
          {...register("image")}
        />

        {/* <Form.Control
          type="file"
          className="mb-2"
          required
          name="file"
          {...register("image")}

          // onChange={handleChange}
          // isInvalid={!!errors.file}
        /> */}
        <input
          placeholder="Item name"
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Item description"
          className="mb-2"
          {...register("description")}
        />
        <input
          placeholder="Item price"
          className="mb-2"
          type="number"
          {...register("price")}
        />
        <input
          placeholder="Item quantity"
          className="mb-2"
          type="number"
          {...register("quantity")}
        />
        <input
          placeholder="Supplier name"
          className="mb-2"
          type="text"
          {...register("SuplierName")}
        />
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="Add new item"
        />
      </Form>
      <ToastContainer />
    </div>
  );
};

export default AddInventoryItems;
