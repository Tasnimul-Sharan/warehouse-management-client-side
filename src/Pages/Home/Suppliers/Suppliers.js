import axios from "axios";
import React, { useEffect, useState } from "react";
import Supplier from "../Supplier/Supplier";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    axios.get("suppliers.json").then((res) => {
      setSuppliers(res.data);
    });
  }, []);
  return (
    <div className="container my-5">
      <div className="border-bottom border-primary">
        <h3>Our Honorable Suppliers</h3>
      </div>
      <div className="row ms-2">
        {suppliers.map((supplier) => (
          <Supplier key={supplier._id} supplier={supplier} />
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
