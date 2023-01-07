import React, { useState } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Accommodation from "./pages/Accommodation/Accommodation";
import style from "./styles/App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      <BrowserRouter>
        <div className={style.container}>
          <Header page={page} />
          <Routes className={style.container}>
            <Route path="/" element={<Home page={page} setPage={setPage} />} />
            <Route
              path="/about"
              element={<About page={page} setPage={setPage} />}
            />
            <Route path="*" element={<Error setPage={setPage} />} />
            <Route path="/accommodation" element={<Accommodation />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
