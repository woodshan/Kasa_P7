import React from 'react';
import pinkStar from "../../assets/icons/pinkStar.svg";
import greyStar from "../../assets/icons/greyStar.svg";
import style from "./Rating.module.css";

const Rating = ({ rates, index }) => {

    const rating = parseInt(rates);
    const listStars = [];

    // Show stars based on rating
    const handleStars = () => {
        for (let i = 0; i < rating; i++) {
          listStars.push(<img src={pinkStar} alt="Étoile" key={i} className={style.star} />);
        }
        if (rating < 5) {
          for (let i = 0; i < 5 - rating; i++) {
            listStars.push(
              <img src={greyStar} alt="Étoile" key={`${index}-${i}`} />
            );
          }
        }
        return listStars;
      };


    return (
        <div>
            {handleStars()}
        </div>
    );
};

export default Rating;