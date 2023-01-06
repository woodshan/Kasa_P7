import React from "react";
import style from "./Banner.module.css";

const Banner = ({children, background}) => {
  return (
    <div className={style["banner-container"]}>
      <div className={style["img-container"]}>
          <img src={background} alt="Paysage" className={style.cover} />
        <div className={style["title-container"]}>
            {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
