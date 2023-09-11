import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        "https://warehouse-management-server-side-six.vercel.app/reviews",
        data
      )
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (data) {
          toast.success("Thanks for adding a review");
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add a Review</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    {...register("name")}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Write a review"
                    rows="4"
                    {...register("description")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Image URL"
                    {...register("image")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ratings (1-5)"
                    min="1"
                    max="5"
                    {...register("ratings")}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary w-full">
                    Add Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
