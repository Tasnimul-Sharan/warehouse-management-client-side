import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../../Hooks/useInventories/useInventories";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories] = useInventories();
  return (
    <div className="container">
      <h1>Inventory Section</h1>
      <div className="row">
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <Link to="/manageinventory">
        <button className="btn btn-primary">Manage Items</button>
      </Link>
    </div>
  );
};

export default Inventories;
