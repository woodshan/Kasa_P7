import React from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";
import background from "../../assets/images/home-background.png";

const Home = () => {
  return (
    <div>
      <Banner background={background}>
        <h1 className={style["banner-title"]}>
          Chez vous, partout et ailleurs
        </h1>
      </Banner>
      <Cards />
    </div>
  );
};

export default Home;
