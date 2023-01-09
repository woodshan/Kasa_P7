import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Accommodation from "./pages/Accommodation/Accommodation";
import style from "./styles/App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <div>
      <BrowserRouter>
        <div className={style.container}>
          <Header currentPage={currentPage} />
          <Routes className={style.container}>
            <Route
              path="/"
              element={
                <Home
                  setCurrentPage={setCurrentPage}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  setCurrentPage={setCurrentPage}
                />
              }
            />
            <Route
              path="*"
              element={<Error />}
            />
            <Route path="/accommodation/:id" element={<Accommodation />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
