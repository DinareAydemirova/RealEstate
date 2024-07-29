import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userProvider";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Users = () => {
  const [data, setData] = useState([]);
  const { token } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [token]);

  const makeUserAdmin = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role: "Admin",
        }),
      });
      if (response.ok) {
        setData((prevUsers) =>
          prevUsers.map((user) =>
            user._id === id ? { ...user, role: "Admin" } : user
          )
        );
      } else {
        console.error("Failed to update role to Admin");
      }
    } catch (error) {
      console.error("Error updating role to Admin:", error);
    }
  };

  const makeRoleUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role: "User",
        }),
      });
      if (response.ok) {
        setData((prevUsers) =>
          prevUsers.map((user) =>
            user._id === id ? { ...user, role: "User" } : user
          )
        );
      } else {
        console.error("Failed to update role to User");
      }
    } catch (error) {
      console.error("Error updating role to User:", error);
    }
  };

  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <div class="flex m-2 space-x-2">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            class="w-full p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            class="p-2 bg-indigo-800 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                User ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Role
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Full Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Email
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Edit
              </th>
            
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {paginatedData.map((elem) => (
              <tr className="hover:bg-gray-50" key={elem._id}>
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  {elem._id}
                </th>
                <td className="px-6 py-4">
                  {elem.role === "User" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      {elem.role}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      {elem.role}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">{elem.fullName}</td>
                <td className="px-6 py-4">{elem.email}</td>
                <td className="p-3 px-5">
                  <div className="flex justify-center">
                    {elem.role === "User" ? (
                      <button
                        className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => makeUserAdmin(elem._id)}
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => makeRoleUser(elem._id)}
                      >
                        Make User
                      </button>
                    )}
                  </div>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center my-4 pb-8">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(data.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Stack>
      </div>
    </>
  );
};

export default Users;
