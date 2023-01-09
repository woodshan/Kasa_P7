import React, { useState } from "react";
import style from "./Slideshow.module.css";
import next from "../../assets/icons/next.svg";
import previous from "../../assets/icons/previous.svg";
// import solidBulletPoint from "../../assets/icons/circle-solid.svg";
// import regularBulletPoint from "../../assets/icons/circle-regular.svg";

const Slideshow = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < data.pictures.length) {
      setCurrentImage(1);
    } else {
      setCurrentImage(0);
    }
    console.log(currentImage);
  };

  return (
    <div className={style["slide-container"]}>
      <div className={style["items-container"]}>
        <img
          src={data.pictures[currentImage]}
          alt="Logement"
          className={style["picture-active"]}
        />
        <div className={style["arrow-container"]}>
          <img src={previous} alt="Précédent" className={style.arrow} />
          <img
            src={next}
            alt="Suivant"
            className={style.arrow}
            onClick={() => handleNext()}
          />
        </div>
        {/* <div className={style["bullet-container"]}>
          <img
            src={regularBulletPoint}
            alt="Nombre d'images"
            className={style.bullet}
          />
          <img
            src={solidBulletPoint}
            alt="Nombre d'images"
            className={style.bullet}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Slideshow;
