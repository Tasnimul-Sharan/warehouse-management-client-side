// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link, Outlet } from "react-router-dom";
// // import auth from "../../firebase.init";
// // import useAdmin from "../../Hooks/useAdmin";

// const Dashboard = () => {
// const [user] = useAuthState(auth);
// const [admin] = useAdmin(user);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-lg-2 col-md-3 col-12 bg-primary">
//           <h2 className="text-white p-3">Welcome to the Dashboard</h2>
//           <ul className="nav flex-column">
//             <li className="nav-item">
//               <Link to="/dashboard" className="nav-link text-white">
//                 My Profile
//               </Link>
//             </li>
//             {/* {!admin && ( */}
//             <li className="nav-item">
//               <Link to="/dashboard/order" className="nav-link text-white">
//                 My Orders
//               </Link>
//               <Link to="/dashboard/review" className="nav-link text-white">
//                 Add a Review
//               </Link>
//             </li>
//             {/* )}
//             {admin && ( */}
//             <li className="nav-item">
//               <Link to="/dashboard/users" className="nav-link text-white">
//                 Make Admin
//               </Link>
//               <Link to="/dashboard/addproduct" className="nav-link text-white">
//                 Add Product
//               </Link>
//               <Link
//                 to="/dashboard/manageproducts"
//                 className="nav-link text-white"
//               >
//                 Manage Products
//               </Link>
//               <Link
//                 to="/dashboard/manageallproduct"
//                 className="nav-link text-white"
//               >
//                 Manage All Orders
//               </Link>
//             </li>
//             {/* )} */}
//           </ul>
//         </div>
//         <div className="col-lg-10 col-md-9 col-12">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaStar,
  FaCog,
  FaUsersCog,
  FaPlus,
  FaClipboardList,
} from "react-icons/fa";
import "./Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="container-fluid dashboard-container">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-12 sidebar bg-primary">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white">
                <FaUser className="nav-icon" />
                <span className="icon-label">My Profile</span>
              </Link>
            </li>
            {!admin && (
              <li className="nav-item">
                <Link to="/dashboard/order" className="nav-link text-white">
                  <FaShoppingCart className="nav-icon" />
                  <span className="icon-label">Orders</span>
                </Link>
                <Link to="/dashboard/review" className="nav-link text-white">
                  <FaStar className="nav-icon" />
                  <span className="icon-label">Add Review</span>
                </Link>
              </li>
            )}

            {admin && (
              <li className="nav-item">
                <Link to="/dashboard/users" className="nav-link text-white">
                  <FaUsersCog className="nav-icon" />
                  <span className="icon-label">Make Admin</span>
                </Link>
                <Link
                  to="/dashboard/addinventory"
                  className="nav-link text-white"
                >
                  <FaPlus className="nav-icon" />
                  <span className="icon-label">Add Inventory</span>
                </Link>
                <Link
                  to="/dashboard/manageinventories"
                  className="nav-link text-white"
                >
                  <FaCog className="nav-icon" />
                  <span className="icon-label">Manage Items</span>
                </Link>
                <Link
                  to="/dashboard/manageallorder"
                  className="nav-link text-white"
                >
                  <FaClipboardList className="nav-icon" />
                  <span className="icon-label">Manage Orders</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="col-lg-10 col-md-9 col-12 mt-3 dashboard-content">
          <h2 className="text-center text-primary">Welcome to the Dashboard</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
