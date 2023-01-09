import React from "react";
import style from "./Cards.module.css";
import dataAccommodations from "../../datas/accommodationsList.json";
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <div className={style["cards-container"]}>
      {dataAccommodations.map(({ id, title, cover }) => (
        <NavLink to={`/accommodation/${id}`} key={id} className={style.link}>
          <div className={style.card} key={id}>
            <img src={cover} alt="Appartement" className={style["img-card"]} />
            <h3 className={style["title-card"]}>{title}</h3>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
