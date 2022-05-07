import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import img from "../../images/Sharan.jpg.jpg";

const About = () => {
  const [suppliers, setSupplier] = useState([]);
  useEffect(() => {
    axios.get("suppliers.json").then((res) => {
      const { data } = res;
      setSupplier(data);
    });
  }, []);
  return (
    <section>
      <div className="bg-primary text-white mt-1 p-5">
        <h1>
          About <br /> The Gadget Zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
          ullam accusamus perspiciatis saepe similique sit autem iure corporis
          ducimus repudiandae consequuntur nemo necessitatibus impedit vel rem,
          excepturi ut repellendus.
        </p>
      </div>
      <div className="container mt-3">
        <h1>Our Honorable suppliers</h1>
        <div className="row ms-2">
          {suppliers.map((supplier) => (
            <div
              className="g-5 col-sm-12 col-md-6 col-lg-4 mb-3"
              key={supplier._id}
              supplier={supplier}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={supplier?.image} />
                <Card.Body>
                  <Card.Title>{supplier?.name}</Card.Title>
                  <h5>{supplier?.address}</h5>
                  <h5>{supplier?.age}</h5>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container my-5">
      <div className="ms-3">
        <Card className="shadow-lg" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Tasnimul Alam</Card.Title>
            <Card.Text>
              I was started a journey when i have no idea about web
              development.Now i can make a single page application with routing
              and Authentication and make a connection between client-side and
              server-side with database Mongodb.Now my goal is to become a
              professonal full Stack Web Developer.For this i have to search the
              resources and make notes everyday and practice it more and more,
              And think about the learnning part that how can apply it to in a
              project.I will give plenty of time, I will give my best to reach
              my goal.Now web development is my part of life. Thank you.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div> */}
    </section>
  );
};

export default About;
