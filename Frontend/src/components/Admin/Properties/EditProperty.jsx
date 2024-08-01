import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    country: "",
    city: "",
    street: "",
    description: "",
    bedroomCount: "",
    bathroomCount: "",
    price: "",
    images: [""], 
  });

  useEffect(() => {
    axios.get(`/properties/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...data.images];
    newImages[index] = e.target.value;
    setData({
      ...data,
      images: newImages,
    });
  };

  const handleAddImage = () => {
    setData({
      ...data,
      images: [...data.images, ""],
    });
  };

  const handleRemoveImage = (index) => {
    const newImages = data.images.filter((_, i) => i !== index);
    setData({
      ...data,
      images: newImages,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/properties/${id}`, data)
      .then(() => {
        navigate("/admin/properties");
      })
      .catch((error) => {
        console.error("There was an error updating property", error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Edit Property
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                value={data.description}
                onChange={handleInputChange}
                rows={3}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about the home.
            </p>
          </div>

          <div className="col-span-full">
            <label htmlFor="images" className="block text-sm font-medium leading-6 text-gray-900">
              Home photos
            </label>
            <div className="mt-2">
              {data.images.map((image, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => handleImageChange(e, index)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="ml-2 p-1 text-red-600"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddImage}
                className="mt-2 text-sm font-semibold leading-6 text-indigo-600"
              >
                Add Image
              </button>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Country
            </label>
            <div className="mt-2">
              <select
                name="country"
                value={data.country}
                onChange={handleInputChange}
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="">Select country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street"
                value={data.street}
                onChange={handleInputChange}
                autoComplete="street-address"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                value={data.city}
                onChange={handleInputChange}
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Price
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="price"
                value={data.price}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="bedroomCount" className="block text-sm font-medium leading-6 text-gray-900">
              Bedroom Count
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="bedroomCount"
                value={data.bedroomCount}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="bathroomCount" className="block text-sm font-medium leading-6 text-gray-900">
              Bathroom Count
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="bathroomCount"
                value={data.bathroomCount}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => navigate("/admin/properties")}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProperty;
