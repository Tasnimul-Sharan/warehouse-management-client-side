import { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';

const useInventoryDetails = (inventoryId) => {
  // const {inventoryId} = useParams()
  const [inventory, setInventory] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/management/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventoryId]);
  return [inventory, setInventory];
};

export default useInventoryDetails;
