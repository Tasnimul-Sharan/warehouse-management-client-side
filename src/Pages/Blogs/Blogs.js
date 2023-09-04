import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container my-5">
      <h5>Frequently Asked Questions and Answers</h5>
      <div className="my-5">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What are types of warehousing?</Accordion.Header>
            <Accordion.Body>
              Distribution centre. Public warehouse. Private warehouse. Bonded
              warehouse. Climate-controlled warehouse. Smart warehouse.
              Consolidated warehouse.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why is warehousing important?</Accordion.Header>
            <Accordion.Body>
              Warehousing enables you to store, ship, and distribute your goods
              from one single location. This makes it easy for you to track and
              manage your inventory efficiently. It can additionally reduce your
              transportation costs, increase your flexibility and reduce your
              staffing needs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What are the principles of warehouse?
            </Accordion.Header>
            <Accordion.Body>
              1) Minimal Touch of Goods. ... 2) One-Way Flow. ... 3) Triadic
              Warehousing. ... 4) Inventory Control. ... 5) Efficient Labour.
              ... 6) Benchmarking. ... 7) Selecting the Materials Handling
              System. ... 8) Know Your Data.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is quality management in warehouse?
            </Accordion.Header>
            <Accordion.Body>
              The Quality management for warehouse processes feature enables
              work to be created based only on item sampling. Therefore, it
              allows for a lightweight process. The inventory that work is
              created depends on the item sampling that is associated with the
              quality association.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
