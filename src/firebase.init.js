import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBo_-Q9h2tJUZ0jbS3k_VHBd-LpqGnlZ0c",
  authDomain: "warehouse-management-sys-640e7.firebaseapp.com",
  projectId: "warehouse-management-sys-640e7",
  storageBucket: "warehouse-management-sys-640e7.appspot.com",
  messagingSenderId: "404504914412",
  appId: "1:404504914412:web:13211f1471c578f1d5b8c9",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAXXYbke4KCRI063eO5qD70v0EdPNIPItE",
//   authDomain: "warehouse-management-264df.firebaseapp.com",
//   projectId: "warehouse-management-264df",
//   storageBucket: "warehouse-management-264df.appspot.com",
//   messagingSenderId: "950727384698",
//   appId: "1:950727384698:web:0585a13feb7a177e19a5c3",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
