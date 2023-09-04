import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import contact from "../../../images/contact-us.jpg";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_38i0g0r",
        "template_qurk0ng",
        e.target,
        "Bt4fEQO7x7yDOUxOd"
      )
      .then(
        (result) => {
          swal("Thank you", "Email sent", "success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4 font-waight-bold">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-12 mb-4">
            <img
              className="img-fluid rounded contact-image"
              src={contact}
              alt="Contact Us"
            />
          </div>

          <div className="col-lg-5 col-md-12">
            <Card className="shadow-lg">
              <Card.Body>
                <Form onSubmit={sendEmail}>
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Control
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="message" mb-3>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Your Message"
                      required
                    />
                  </Form.Group>
                  <div className="mt-3">
                    <Button variant="primary" type="submit" className=" w-100">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
