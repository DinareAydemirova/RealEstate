import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Index";
import Home from "./components/Home/Index";
import Residencies from "./components/Residencies/Index";
import ScrollToTop from "./hooks/ScrollToTop";
import PuffLoader from "react-spinners/PuffLoader";
import "aos/dist/aos.css";
import AOS from "aos";
import Contact from "./components/Contact/Index";
import Register from "./components/Register/Index";
import Login from "./components/Login/Index";
import PrivateRoute from "./routes/PrivateRoute";
import ResetPassword from "./components/ResetPassword/Index";
import NewPassword from "./components/NewPassword/Index";
import AdminPanel from "./components/Admin/Index";
import Dashboard from "./components/Admin/Dashboard/Index";
import Users from "./components/Admin/Users/Index";
import Profile from "./components/Profile/Index";
import ManageProperties from "./components/Admin/Properties/Index";
import DetailProperty from "./components/Admin/Properties/Detail";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading ? (
        <div className="loader-container flex justify-center items-center min-h-screen">
          <PuffLoader color="#4066ff" size={60} />
        </div>
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/residencies" element={<Residencies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<PrivateRoute roles={["Admin"]} />}>
            <Route path="admin/*" element={<AdminPanel />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="properties" element={<ManageProperties />} />
              <Route path="properties/:id" element={<DetailProperty />} />

            </Route>
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
