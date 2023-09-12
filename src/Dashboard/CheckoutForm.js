import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ item }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, itemsname, email, price } = item;

  useEffect(() => {
    // Fetch client secret
    fetch(
      "https://warehouse-management-server-side-six.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // Confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: itemsname,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is completed");

      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };

      // Update order status
      fetch(
        `https://warehouse-management-server-side-six.vercel.app/orders/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "12px",
                  color: "#424770",
                  ":placeholder": {
                    color: "#e1e6ea",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        <div className="card-actions d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-success mt-5"
            disabled={!stripe || !clientSecret || success}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-danger">{cardError}</p>}
      {success && (
        <div className="text-success">
          <p>{success}</p>
          <p>
            Your Transaction Id:{" "}
            <span className="text-primary font-weight-bold">
              {transactionId}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
