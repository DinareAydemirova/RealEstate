import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Index";
import Home from "./components/Home/Index";
import Residencies from "./components/Residencies/Index";
import ScrollToTop from "./hooks/ScrollToTop";
import PuffLoader from "react-spinners/PuffLoader";
import "aos/dist/aos.css";
import AOS from "aos";

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
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
