import axios from "axios";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("reviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="container my-5">
      <div
        // style={{ borderSlice: "1px solid blue" }}
        className="border-bottom border-primary w-50"
      >
        <h3>
          Our Honorable Customers <br /> What they say about us
        </h3>
      </div>
      <div className="row ms-2">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
