import axios from "axios";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://intense-headland-97851.herokuapp.com/review")
      .then((res) => {
        setReviews(res.data);
      });
  }, []);
  return (
    <div className="container my-5">
      <h3 className="border-bottom border-primary ms-3">
        Our Honorable Customers <br /> What they say about us
      </h3>
      <div className="row ms-2">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
