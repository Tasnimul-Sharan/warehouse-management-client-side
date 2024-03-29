import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(
      `https://warehouse-management-server-side-six.vercel.app/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("You have added an admin");
        }
      });
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-sm btn-dark">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
