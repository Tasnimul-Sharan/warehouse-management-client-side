import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import Item from "../Home/Inventory/Inventory";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const { data } = await axios.get(
        `http://localhost:5000/item?email=${email}`
      );
      setItems(data);
    };
    getItems();
  }, []);

  return (
    <div>
      <h1>my items : {items.length}</h1>
      {items.map((item) => (
        <div key={item._id} item={item}></div>
      ))}
    </div>
  );
};

export default MyItems;
