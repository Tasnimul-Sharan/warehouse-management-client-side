import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Pages/Shared/Loading/Loading";

const imageApiKey = "07fbca00b5a9b6edf6b4d94c0a586185";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

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

          console.log(data);
          const email = user?.email;
          fetch(
            `https://warehouse-management-server-side-six.vercel.app/profile/${email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data) {
                toast.success("You have successfully saved your profile");
              }
            });
        }
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card w-100 max-w-sm shadow-lg">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                {...register("email")}
                value={user?.email}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="user name"
                className="form-control"
                {...register("name")}
                value={user?.displayName}
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="education" className="form-label">
                Your Education
              </label>
              <input
                type="text"
                id="education"
                className="form-control"
                {...register("education")}
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="location" className="form-label">
                Location (City/District)
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                {...register("location")}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                placeholder="Your Phone Number"
                className="form-control"
                {...register("phoneNumber")}
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="profileLink" className="form-label">
                Your LinkedIn Profile Link
              </label>
              <input
                type="url"
                id="profileLink"
                className="form-control"
                {...register("profileLink")}
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                {...register("image")}
              />
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Save Profile"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
