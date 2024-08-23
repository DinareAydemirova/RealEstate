import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

const ResetPassword = () => {
  const [error, setError] = useState(null);

  const sendEmail = (values) => {
    const templateParams = {
      from_email: values.email,
      to_email: values.email,
      to_name: "Kinsley team",
    };

    emailjs
      .send(
        "service_dhp5dpe",
        "template_43000fy",
        templateParams,
        "B0TWgyT1gV8R_WZiW"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setError("Failed to send the email. Please try again later.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20 pb-20">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Reset Password
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Please enter your email to reset your password
          </p>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              sendEmail(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700">
                    Email
                  </label>
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

                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Note: We will send a password reset link to your email
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
