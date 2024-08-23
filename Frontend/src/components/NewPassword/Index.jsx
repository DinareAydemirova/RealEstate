import React, { useState } from 'react';
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const NewPassword = () => {
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleResetPassword = async (values, { resetForm }) => {
        try {
            const response = await fetch("http://localhost:3000/reset-password", {
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
                throw new Error(errorData.message);
            }
            resetForm();
            setError(null);
            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Reset Password</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Reset Password</h2>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email("Invalid email address")
                                .required("Required"),
                            password: Yup.string()
                                .min(8, "Password must be at least 8 characters")
                                .required("Required"),
                        })}
                        onSubmit={handleResetPassword}
                    >
                        <Form className="space-y-6">
                            <div className="relative">
                                <label className="block text-sm font-bold text-gray-700">Email</label>
                                <Field
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                    type="email"
                                    placeholder="mail@example.com"
                                    name="email"
                                />
                                <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-bold text-gray-700">New Password</label>
                                <Field
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your new password"
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
                                <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />
                            </div>
                            {error && (
                                <div className="text-red-500 text-sm mb-4">{error}</div>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none"
                            >
                                Reset Password
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default NewPassword;
