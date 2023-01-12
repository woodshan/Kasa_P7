import React, { useState } from "react";
import style from "./styles/App.module.css";
import Footer from "./components/Footer/Footer";
import Router from "./components/Router/Router";
import Header from "./components/Header/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <div>
      <div className={style.container}>
        <Router setCurrentPage={setCurrentPage}>
          <Header currentPage={currentPage} />
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
