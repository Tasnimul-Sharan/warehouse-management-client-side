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
import InventoryCheckOut from "./Pages/InventoryCheckout/InventoryCheckOut";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:inventoryId" element={<Inventories />} />
        <Route path="/checkout/:inventoryId" element={<InventoryCheckOut />} />
        <Route path="/registation" element={<Registation />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
