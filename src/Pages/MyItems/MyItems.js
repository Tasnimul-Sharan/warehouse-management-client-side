import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const { data } = await axios.get(
        `http://localhost:5000/item?email=${email}`,
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
      axios.delete(`http://localhost:5000/item/${id}`).then((res) => {
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
    <div className="container me-5">
      <h1>my items : {items?.length}</h1>
      <div className="row">
        {items.map((item) => (
          <div
            className="g-3 col-sm-12 col-md-6 col-lg-6 mb-3"
            key={item?._id}
            item={item}
          >
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={item?.image} />
              <Card.Body>
                <Card.Title>{item?.name}</Card.Title>
                <Card.Text>{item?.description}</Card.Text>
                <h5>quantity: {item?.quantity}</h5>
                <h5>price: {item?.price}</h5>
                <h5>{item?.SuplierName}</h5>
                <Button
                  onClick={() => handleDelete(item?._id)}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
