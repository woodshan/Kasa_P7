import React from "react";
import style from "./Informations.module.css";
import pinkStar from "../../assets/icons/pinkStar.svg";
import greyStar from "../../assets/icons/greyStar.svg";

const Informations = ({ data }) => {

    const rating = parseInt(data.rating);
  return (
    <div>
      <div className={style.container}>
        <div className={style["location-container"]}>
          <h1 className={style.title}>{data.title}</h1>
          <h2 className={style.location}>{data.location}</h2>
        </div>
        <div className={style["profile-container"]}>
          <p className={style["host-name"]}>{data.host.name}</p>
          <img
            src={data.host.picture}
            alt="Profile"
            className={style.profile}
          />
        </div>
      </div>
      <div className={style.notes}>
        <div className={style["tags-container"]}>
          {data.tags.map((tags, index) => (
            <span className={style.tag} key={index}>
              {tags}
            </span>
          ))}
        </div>
        <div className={style["star-container"]}>
            <img src={pinkStar} alt='Étoiles' />
            <img src={pinkStar} alt='Étoiles' />
            <img src={pinkStar} alt='Étoiles' />
            <img src={pinkStar} alt='Étoiles' />
            <img src={greyStar} alt='Étoiles' />
        </div>
      </div>
    </div>
  );
};

export default Informations;
