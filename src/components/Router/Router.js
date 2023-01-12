import React from "react";
import Home from "../../pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Error from "../../pages/Error/Error";
import Accommodation from "../../pages/Accommodation/Accommodation";

const Router = ({ children, setCurrentPage }) => {

  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
        <Route
          path="/about"
          element={<About setCurrentPage={setCurrentPage} />}
        />
        <Route path="*" element={<Error />} />
        <Route
          path="/accommodation/:id"
          element={<Accommodation setCurrentPage={setCurrentPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
