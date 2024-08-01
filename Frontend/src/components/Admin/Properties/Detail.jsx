import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const DetailProperty = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/properties/${id}`);
        setData(res.data);
        setMainImage(res.data.images?.[0] || "");
      } catch (error) {
        console.error("Error fetching menu detail:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt={data.name}
              className="w-full h-96 object-cover mb-4"
            />
            <div className="flex gap-2 overflow-x-scroll">
              {data.images?.map((img, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(img)}
                  className={`cursor-pointer border-2 ${
                    img === mainImage ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Room image ${index + 1}`}
                    className="w-24 h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2 flex flex-wrap	 gap-2">
              <FaLocationDot />
              <p>{data.country},</p>
              <p>{data.city},</p>
              <p>{data.street}</p>
            </h2>
            <div className="mb-4">
              <span className="text-2xl font-bold">${data.price}</span>
            </div>

            <p className="text-gray-700 mb-6">{data.description}</p>

            <div className="flex justify-around">
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"
                >
                  <IoBedSharp className="text-2xl" />
                  <p>Bedroom Count:</p>
                  {data.bedroomCount}
                </label>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"
                >
                  <FaBath className="text-2xl" />
                  <p>Bathroom Count:</p>
                  {data.bathroomCount}
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">ID: {data._id}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProperty;
