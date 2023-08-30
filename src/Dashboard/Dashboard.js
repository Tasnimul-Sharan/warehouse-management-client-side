// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link, Outlet } from "react-router-dom";
// // import auth from "../../firebase.init";
// // import useAdmin from "../../Hooks/useAdmin";

// const Dashboard = () => {
//   //   const [user] = useAuthState(auth);
//   //   const [admin] = useAdmin(user);

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
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row sidebar">
        <div className="col-lg-2 col-md-3 col-12 bg-primary">
          <ul className="nav flex-column">
            <li className="nav-item ">
              <Link to="/dashboard" className="nav-link text-white">
                My Profile
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/dashboard/order" className="nav-link text-white">
                My Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/myitems" className="nav-link text-white">
                My items
              </Link>

              <Link
                to="/dashboard/manageinventories"
                className="nav-link text-white"
              >
                Manage items
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/users" className="nav-link text-white">
                Make Admin
              </Link>
              <Link
                to="/dashboard/addinventory"
                className="nav-link text-white"
              >
                Add inventory
              </Link>
              <Link
                to="/dashboard/manageproducts"
                className="nav-link text-white"
              >
                Manage Products
              </Link>
              <Link
                to="/dashboard/manageallproduct"
                className="nav-link text-white"
              >
                Manage All Orders
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-10 col-md-9 col-12 mt-3">
          <h2 className="text-center text-primary">Welcome to the Dashboard</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
