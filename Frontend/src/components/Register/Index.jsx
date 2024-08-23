import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          fullName: values.fullName,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      resetForm();
      setError(null);
      toast.success("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      setError(error.message);
      toast.error(`Registration failed: ${error.message}`);
    }
  };

  return (
    <>
      <ToastContainer/>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-28 pb-20">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Welcome!</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Fill the form to create an account
          </p>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              repeatpassword: "",
            }}
            validationSchema={yup.object({
              fullName: yup.string().required("Full name is required"),
              email: yup
                .string()
                .email("Invalid email address")
                .required("Email is required"),
              password: yup
                .string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
              repeatpassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match")
                .required("Repeat password is required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(false);
              handleSubmit(values, { resetForm });
            }}
          >
            <Form className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700">Full Name</label>
                <Field
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                />
                <ErrorMessage
                  name="fullName"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700">Email</label>
                <Field
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                  type="email"
                  placeholder="mail@gmail.com"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700">Password</label>
                <Field
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700">Repeat Password</label>
                <Field
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                  type={showPassword ? "text" : "password"}
                  placeholder="Repeat your password"
                  name="repeatpassword"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage
                  name="repeatpassword"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm mb-4">{error}</div>
              )}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none"
              >
                Sign up
              </button>
              <p className="flex flex-col items-center justify-center mt-6 text-center text-sm text-gray-500">
                <span>Already have an account?</span>
                <Link
                  to="/login"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Log in
                </Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
