import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://intense-headland-97851.herokuapp.com/management")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories, setInventories];
};

export default useInventories;
