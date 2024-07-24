import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n/*remove custom style*/\n  .circles{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n  .circles li{\n    position: absolute;\n    display: block;\n    list-style: none;\n    width: 20px;\n    height: 20px;\n    background: rgba(255, 255, 255, 0.2);\n    animation: animate 25s linear infinite;\n    bottom: -150px;  \n}\n.circles li:nth-child(1){\n    left: 25%;\n    width: 80px;\n    height: 80px;\n    animation-delay: 0s;\n}\n \n \n.circles li:nth-child(2){\n    left: 10%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 2s;\n    animation-duration: 12s;\n}\n \n.circles li:nth-child(3){\n    left: 70%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 4s;\n}\n \n.circles li:nth-child(4){\n    left: 40%;\n    width: 60px;\n    height: 60px;\n    animation-delay: 0s;\n    animation-duration: 18s;\n}\n \n.circles li:nth-child(5){\n    left: 65%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 0s;\n}\n \n.circles li:nth-child(6){\n    left: 75%;\n    width: 110px;\n    height: 110px;\n    animation-delay: 3s;\n}\n \n.circles li:nth-child(7){\n    left: 35%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 7s;\n}\n \n.circles li:nth-child(8){\n    left: 50%;\n    width: 25px;\n    height: 25px;\n    animation-delay: 15s;\n    animation-duration: 45s;\n}\n \n.circles li:nth-child(9){\n    left: 20%;\n    width: 15px;\n    height: 15px;\n    animation-delay: 2s;\n    animation-duration: 35s;\n}\n \n.circles li:nth-child(10){\n    left: 85%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 0s;\n    animation-duration: 11s;\n}\n  @keyframes animate {\n \n    0%{\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n        border-radius: 0;\n    }\n \n    100%{\n        transform: translateY(-1000px) rotate(720deg);\n        opacity: 0;\n        border-radius: 50%;\n    }\n \n}\n.triangle{\n  border-top:60rem solid #fff;\n  border-left:25rem solid transparent;\n}\n",
        }}
      />
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div
            className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            style={{
              backgroundImage:
                "url(https://wallpapers.com/images/hd/dream-house-pictures-1800-x-1200-yjphbmq6lkdrikdb.jpg)",
            }}
            data-aos="fade-right">
            <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0" />
            <div className="absolute triangle  min-h-screen right-0 w-16" />
            <a
              href="https://codepen.io/uidesignhub"
              target="_blank"
              title="codepen aji"
              className="flex absolute top-5 text-center text-gray-100 focus:outline-none"
            >
              <img
                src="/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                alt="aji"
                className="object-cover mx-auto w-8 h-8 rounded-full w-10 h-10"
              />
            </a>

            <div className="w-full  max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Reference site about Lorem Ipsum..
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book it has?
              </div>
            </div>
            <ul className="circles">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Welcome!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Fill the form to create a account
                </p>
              </div>

              <form className="mt-8 space-y-6" action="#" method="POST"  data-aos="fade-left">
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                        Full Name
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type=""
                    placeholder="Full name"
                  />
                </div>
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type=""
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div className="mt-8 content-center relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <button
                      type="button"
                      className="focus:outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
               
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign up
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Already have an account?</span>
                  <Link
                    to='/login'
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
