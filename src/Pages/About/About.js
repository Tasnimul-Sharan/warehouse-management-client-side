import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const About = () => {
  const [suppliers, setSupplier] = useState([]);
  useEffect(() => {
    axios
      .get("https://warehouse-management-server-side-six.vercel.app/supplier")
      .then((res) => {
        const { data } = res;
        setSupplier(data);
      });
  }, []);
  return (
    <section>
      <div className="bg-primary text-white p-5">
        <h1>
          About <br /> The Gadget Zone
        </h1>
        <p>
          The Gadget zone is kind of Electronics Warehouse.We provide Electronic
          gadgets in our warehouse like computer, laptop, tv, smartphone, drone,
          microwave, Refrigerator etc.We promiss about our product that, all the
          products are well and good enough.The Gadget zone has 20 years’
          experience in the electronics industry, buying large quantities of
          consumer Electronics from the manufacturer. Our power to buy this
          stock in bulk means we are able to pass on great savings to you.{" "}
        </p>
      </div>
      <div className="container mt-3">
        <h1>Our Honorable suppliers</h1>
        <div className="row ms-2">
          {suppliers.map((supplier) => (
            <div
              className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3"
              key={supplier?._id}
              supplier={supplier}
            >
              <Card className="shadow-lg" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={supplier?.image} />
                <Card.Body>
                  <Card.Title>{supplier?.name}</Card.Title>
                  <h5>{supplier?.address}</h5>
                  <h5>Age: {supplier?.age}</h5>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
