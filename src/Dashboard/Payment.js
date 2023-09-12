import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../Pages/Shared/Loading/Loading";

const stripePromise = loadStripe(
  "pk_test_51L0gl9DSPmuM2wlXUsxQUunhceYL44o1t3GvH8OLKIwCl95BkfeiI9KCfWMr1jRi09KTNH0AdOTK3647RO6gHH1k00j5G0DYnK"
);

const Payment = () => {
  const { id } = useParams();
  const { data: item, isLoading } = useQuery(["orders", id], () =>
    fetch(
      `https://warehouse-management-server-side-six.vercel.app/orders/${id}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card bg-light mb-3 shadow">
            <div className="card-body">
              <h1 className="card-title text-success font-sans">
                Hello {item?.name}
              </h1>
              <h2 className="text-xl text-slate-900 font-serif">
                Please pay for {item.itemsname}
              </h2>
              <img src={item.image} alt="" className="img-fluid" />
              <h2 className="text-xl text-danger">Please pay: ${item.price}</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card  mb-3 shadow">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm item={item} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
