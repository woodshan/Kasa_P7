import React from 'react';
import style from "./Home.module.css";
import background from "../../assets/images/home-background.png"

const Home = () => {
  return (
    <div className={style["banner-container"]}>
      <img src={background} alt="paysage" className={style["background-img"]} />
      <h1 className={style["banner-title"]}>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Home;