import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProperty = () => {
  const navigate = useNavigate();

  const initialValues = {
    images: [""],
    country: "",
    city: "",
    price: "",
    description: "",
    street: "",
    bedroomCount: "",
    bathroomCount: "",
  };

  const validationSchema = yup.object({
    images: yup
      .array()
      .of(yup.string().required("Image URL is required"))
      .min(1, "At least one image is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    price: yup.number().required("Price is required").positive(),
    street: yup.string().required("Street is required"),
    description: yup.string().required("Description is required"),
    bedroomCount: yup.number().required("Bedroom count is required").positive(),
    bathroomCount: yup.number().required("Bathroom count is required").positive(),
  });

  const handleFormSubmit = (values, { setSubmitting }) => {
    axios
      .post("/properties", values)
      .then(() => {
        toast.success("Property added successfully!");
        setTimeout(() => {
          navigate("/admin/properties");
        }, 1000);
      })
      .catch((error) => {
        toast.error("There was an error creating the property item!");
        console.error("There was an error creating the property!", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Add new Property
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <Field
                        id="description"
                        name="description"
                        as="textarea"
                        rows={3}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about the home.
                    </p>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="images"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Home photos
                    </label>
                    <div className="mt-2">
                      <FieldArray name="images">
                        {({ push, remove }) => (
                          <>
                            {values.images.map((_, index) => (
                              <div key={index} className="flex items-center mb-2">
                                <Field
                                  name={`images.${index}`}
                                  placeholder="Image URL"
                                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="ml-2 p-1 text-red-600"
                                >
                                  X
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() => push("")}
                              className="mt-2 text-sm font-semibold leading-6 text-indigo-600"
                            >
                              Add Image
                            </button>
                          </>
                        )}
                      </FieldArray>
                      <ErrorMessage
                        name="images"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                      </Field>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="street"
                        id="street"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="street"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Price
                    </label>
                    <div className="mt-2">
                      <Field
                        type="number"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="bedroomCount"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Bedroom Count
                    </label>
                    <div className="mt-2">
                      <Field
                        type="number"
                        name="bedroomCount"
                        id="bedroomCount"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="bedroomCount"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="bathroomCount"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Bathroom Count
                    </label>
                    <div className="mt-2">
                      <Field
                        type="number"
                        name="bathroomCount"
                        id="bathroomCount"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="bathroomCount"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
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
                disabled={isSubmitting}
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddProperty;
