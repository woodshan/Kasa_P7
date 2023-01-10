import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import accommodationsList from "../../datas/accommodationsList.json";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import Informations from "../../components/Informations/Informations";
import style from "./Accommodation.module.css";

const Accommodation = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const { id } = useParams();

  const result = accommodationsList.find(
    (accommodation) => accommodation.id === id
  );

  return (
    <div className={style.container}>
      <Slideshow data={result} />
      <Informations data={result} />
      <div className={style["collapse-container"]}>
        <Collapse title="Description">
          <p>{result.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          {result.equipments.map((equipment, index) => (
            <p className={style.block} key={index}>
              {equipment}
            </p>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default Accommodation;
