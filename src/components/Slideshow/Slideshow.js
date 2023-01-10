import React, { useEffect, useState } from "react";
import style from "./Slideshow.module.css";
import next from "../../assets/icons/next.svg";
import previous from "../../assets/icons/previous.svg";

const Slideshow = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < data.pictures.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const handlePrevious = () => {
    if (currentImage === 0) {
      setCurrentImage(data.pictures.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className={style["slide-container"]}>
      <div className={style["items-container"]}>
        <img
          src={data.pictures[currentImage]}
          alt={`Photos ${data.title}`}
          className={style["picture-visible"]}
        />
        {data.pictures.length > 1 ? (
          <div className={style["arrow-container"]}>
            <img
              src={previous}
              alt="Précédent"
              className={style.arrow}
              onClick={() => handlePrevious()}
            />
            <img
              src={next}
              alt="Suivant"
              className={style.arrow}
              onClick={() => handleNext()}
            />
          </div>
        ) : null}
        <div className={style["bullet-container"]}>
          <span className={style.number}>
            {currentImage + 1}/{data.pictures.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
