import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Inventories from "./Pages/Home/Inventories/Inventories";
import Login from "./Pages/Login/Login/Login";
import Registation from "./Pages/Login/Registation/Registation";
// import InventoryCheckOut from "./Pages/InventoryCheckOut/InventoryCheckOut";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import InventoryDetails from "./Pages/Home/InventoryDetails/InventoryDetails";
import AddInventoryItems from "./Pages/AddInventoryItems/AddInventoryItems";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import MyItems from "./Pages/MyItems/MyItems";

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
        <Route path="/registation" element={<Registation />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
