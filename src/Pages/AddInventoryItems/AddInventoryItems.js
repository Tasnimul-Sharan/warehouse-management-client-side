import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddInventoryItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/management", data).then((res) => {
      const { data } = res;
      if (data) {
        toast("You have added a new item, Yeah!!!");
      }
    });
  };

  return (
    <div className="w-25 mx-auto">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Image Url"
          className=""
          type="text"
          {...register("image")}
        />
        <input
          placeholder="Item name"
          className=""
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Item description"
          className=""
          {...register("description")}
        />
        <input
          placeholder="Item price"
          className=""
          type="number"
          {...register("price", { min: 18, max: 99 })}
        />
        <input
          placeholder="Item quantity"
          className=""
          type="number"
          {...register("quantity", { min: 18, max: 99 })}
        />
        <input
          placeholder="Supplier name"
          className=""
          {...register("supplier name")}
        />
        <input className="" type="submit" value="Add new item" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddInventoryItems;
