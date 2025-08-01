import axios from 'axios';
import React from 'react';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Components/UseAdmin/Usehook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Components/Authincation/Authincation';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const {
    data: allusers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allusers");
      return res.data;
    },
  });

  const handleMakeRole = (user, role) => {
    Swal.fire({
      title: `Are you sure you want to make ${user.name} an ${role}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make ${role}`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/role/${user._id}`, { role })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire("Success!", `${user.name} is now ${role}.`, "success");
              refetch();
            }
          });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch(); // React Query will fetch updated data
          }
        });
      }
    });
  };

  // ✅ Loading indicator
  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-semibold text-blue-600">
        Loading users...
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Total Users: {allusers.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user, index) => (
              <tr key={user._id} className="hover">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user.photoURL}
                    className="w-10 h-10 rounded-full object-cover"
                    alt="user"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn btn-sm btn-ghost text-xl">
                      <FaUserShield />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32"
                    >
                      <li>
                        <button
                          disabled={user.role === "admin"}
                          onClick={() => handleMakeRole(user, "admin")}
                        >
                          Admin
                        </button>
                      </li>
                      <li>
                        <button
                          disabled={user.role === "user"}
                          onClick={() => handleMakeRole(user, "user")}
                        >
                          User
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
