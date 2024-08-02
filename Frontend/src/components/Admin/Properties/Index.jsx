import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { TbListDetails } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const ManageProperties = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/properties").then((res) => {
      setData(res.data);
    });
  }, []);

  const filteredData = data.filter((property) =>
    property.city.toLowerCase().includes(search.toLowerCase()) ||
    property.street.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleDelete = (id) => {
    axios
      .delete(`/properties/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((property) => property._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the property!", error);
      });
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <div className="flex justify-between m-2 ">
          <button
            className="px-4 py-2 rounded-md border border-indigo-600 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
            onClick={() => navigate(`/admin/properties/addProperty`)}
          >
            Add new property
          </button>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              className="w-full p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              type="button"
              className="p-2 bg-indigo-800 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
        </div>
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Images
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Country
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Detail
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {paginatedData.map((elem) => (
              <tr className="hover:bg-gray-50" key={elem._id}>
                <th className="px-6 py-4">
                  <img src={elem.images[0]} alt="" />
                </th>
                <td className="px-6 py-4">{elem._id}</td>
                <td className="px-6 py-4">{elem.country}</td>
                <td className="px-6 py-4">${elem.price}</td>
                <td className="px-6 py-4 text-indigo-500 hover:text-indigo-800">
                  <TbListDetails
                    className="text-xl"
                    onClick={() => navigate(`/admin/properties/${elem._id}`)}
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <a href="#" title="Delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(elem._id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </a>
                    <a href="#" title="Edit">
                      <button
                       onClick={() => navigate(`/admin/properties/edit/${elem._id}`)}
                      >
                          <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 text-green-600 hover:text-green-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                      </button>
                    
                    </a>
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
            count={Math.ceil(filteredData.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Stack>
      </div>
    </>
  );
};

export default ManageProperties;
