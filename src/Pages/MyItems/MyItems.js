import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItemRow from "../ManageInventories/MyItemRow";
import Loading from "../Shared/Loading/Loading";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const { data } = await axios.get(
        `https://warehouse-management-server-side-six.vercel.app/item?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setItems(data);
    };
    getItems();
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      axios
        .delete(
          `https://warehouse-management-server-side-six.vercel.app/item/${id}`
        )
        .then((res) => {
          const { data } = res;
          console.log(data);
          const remaining = items.filter((inventory) => inventory._id !== id);
          setItems(remaining);
        });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container-fluid">
      <h1>my items : {items?.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>SuplierName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <MyItemRow
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></MyItemRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
