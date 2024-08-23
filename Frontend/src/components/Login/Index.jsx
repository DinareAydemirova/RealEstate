import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../../context/userProvider";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed.");
      }

      const data = await response.json();
      addToken(data);
      resetForm();
      setError(null);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Log In</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-28 pb-20">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Welcome Back!</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Please sign in to your account
          </p>
          <Formik
            initialValues={{ password: "", email: "" }}
            validationSchema={Yup.object({
              password: Yup.string()
                .min(8, "Must be at least 8 characters long")
                .required("Password is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            })}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
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
              {error && (
                <div className="text-red-500 text-sm mb-4">{error}</div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/resetpassword"
                    className="text-indigo-400 hover:text-blue-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none"
              >
                Sign in
              </button>
              <p className="flex flex-col items-center justify-center mt-6 text-center text-sm text-gray-500">
                <span>Don't have an account?</span>
                <Link
                  to="/register"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Sign up
                </Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
