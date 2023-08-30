import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Inventories from "./Pages/Home/Inventories/Inventories";
import Login from "./Pages/Login/Login/Login";
import Registation from "./Pages/Login/Registation/Registation";
import InventoryDetails from "./Pages/Home/InventoryDetails/InventoryDetails";
import AddInventoryItems from "./Pages/AddInventoryItems/AddInventoryItems";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import MyItems from "./Pages/MyItems/MyItems";
import Blogs from "./Pages/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./Pages/Login/Login/RequireAuth/RequireAuth";
import About from "./Pages/About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./Dashboard/Dashboard";
import MyProfile from "./Dashboard/MyProfile";
import MyOrders from "./Dashboard/MyOrders";
import Payment from "./Dashboard/Payment";
AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:inventoryId" element={<Inventories />} />
        <Route
          path="/details/:inventoryId"
          element={
            <RequireAuth>
              <InventoryDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/addinventory"
          element={
            <RequireAuth>
              <AddInventoryItems />
            </RequireAuth>
          }
        />
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile />}></Route>
          <Route path="addinventory" element={<AddInventoryItems />}></Route>
          <Route path="myitems" element={<MyItems />}></Route>
          <Route path="order" element={<MyOrders />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="manageinventories"
            element={<ManageInventories />}
          ></Route>
          {/* <Route path="payment/:id" element={<Payment />}></Route> */}
        </Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/registation" element={<Registation />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
