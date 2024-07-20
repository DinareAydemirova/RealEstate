import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Index";
import Home from "./components/Home/Index";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "./hooks/ScrollToTop";
import Residencies from "./components/Residencies/Index";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/residencies" element={<Residencies />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
