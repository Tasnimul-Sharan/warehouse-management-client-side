// import axios from "axios";
// import React from "react";
// import { Form } from "react-bootstrap";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
// import { toast, ToastContainer } from "react-toastify";
// import auth from "../../firebase.init";
// import "./AddInventoryItems.css";

// const AddInventoryItems = () => {
//   const { register, handleSubmit } = useForm();
//   const [user] = useAuthState(auth);
//   const onSubmit = (data) => {
//     axios.post("http://localhost:5000/management", data).then((res) => {
//       const { data } = res;
//       console.log(data);
//       if (data) {
//         toast.success("You have added a new item, Yeah!!!");
//       }
//     });
//   };

//   return (
//     <div className="form-group mx-auto container-fluid row my-5">
//       <h1>Add a new item</h1>
//       <Form
//         className="shadow-lg p-5 d-flex flex-column"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <input
//           placeholder="Enter Name"
//           className="mb-2 from-control"
//           value={user?.displayName}
//           type="text"
//           {...register("user name")}
//           required
//         />
//         <input
//           placeholder="Enter Email"
//           className="mb-2"
//           type="email"
//           value={user?.email}
//           {...register("email")}
//         />
//         <input
//           placeholder="Image Url"
//           className="mb-2"
//           type="text"
//           {...register("image")}
//         />

//         {/* <Form.Control
//           type="file"
//           className="mb-2"
//           required
//           name="file"
//           {...register("image")}

//           // onChange={handleChange}
//           // isInvalid={!!errors.file}
//         /> */}
//         <input
//           placeholder="Item name"
//           className="mb-2"
//           {...register("name", { required: true, maxLength: 20 })}
//         />
//         <input
//           placeholder="Item description"
//           className="mb-2"
//           {...register("description")}
//         />
//         <input
//           placeholder="Item price"
//           className="mb-2"
//           type="number"
//           {...register("price")}
//         />
//         <input
//           placeholder="Item quantity"
//           className="mb-2"
//           type="number"
//           {...register("quantity")}
//         />
//         <input
//           placeholder="Supplier name"
//           className="mb-2"
//           type="text"
//           {...register("SuplierName")}
//         />
//         <input
//           className="btn btn-outline-primary"
//           type="submit"
//           value="Add new item"
//         />
//       </Form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddInventoryItems;

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddInventoryItems = () => {
  const { register, handleSubmit } = useForm();

  const imageApiKey = "07fbca00b5a9b6edf6b4d94c0a586185";

  const onSubmit = (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("image", result);
        if (result.success) {
          const image = result.data.url;
          console.log("jgjgjg", image);

          const product = {
            name: data.itemsname,
            email: data.email,
            price: data.price,
            availableQuantity: data.availableQuantity,
            minimumQuantity: data.minimumQuantity,
            description: data.description,
            image: image,
          };
          fetch("http://localhost:5000/management", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.insertedId) {
                toast.success("You have added a item successfully");
              } else {
                toast.error("failed to add a product");
              }
            });
        }
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h1>Add a new item</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Items name"
                className="form-control"
                {...register("itemsname")}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Description"
                className="form-control"
                {...register("description")}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                placeholder="Enter a price"
                className="form-control"
                {...register("price")}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                placeholder="Enter an Available Quantity"
                className="form-control"
                {...register("availableQuantity")}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                placeholder="Enter a Minimum Quantity"
                className="form-control"
                {...register("minimumQuantity")}
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                {...register("image")}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInventoryItems;
