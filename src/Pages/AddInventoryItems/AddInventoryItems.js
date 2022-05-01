import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddInventoryItems = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/item", data).then((res) => {
      const { data } = res;
      if (data) {
        toast("You have added a new item, Yeah!!!");
      }
    });
  };

  return (
    <div className="row w-25 mx-auto">
      <form
        className="d-flex flex-column my-5 col-sm-12 col-md-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Enter Name"
          className="mb-2"
          value={user.displayName}
          type="text"
          {...register("user name")}
          required
        />
        <input
          placeholder="Enter Email"
          className="mb-2"
          type="email"
          value={user.email}
          {...register("email")}
        />
        <input
          placeholder="Image Url"
          className="mb-2"
          type="text"
          {...register("image")}
        />
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
          {...register("price", { min: 18, max: 99 })}
        />
        <input
          placeholder="Item quantity"
          className="mb-2"
          type="number"
          {...register("quantity", { min: 18, max: 99 })}
        />
        <input
          placeholder="Supplier name"
          className="mb-2"
          {...register("supplier name")}
        />
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="Add new item"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddInventoryItems;
