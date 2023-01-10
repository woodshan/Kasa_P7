import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import accommodationsList from "../../datas/accommodationsList.json";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import Informations from "../../components/Informations/Informations";
import style from "./Accommodation.module.css";

const Accommodation = ({ setCurrentPage }) => {
  const [dataLoading, setDataLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  const result = accommodationsList.find(
    (accommodation) => accommodation.id === id
  );

  useEffect(() => {
    setCurrentPage(window.location.pathname);
    if (result === undefined) {
      setDataLoading(true);
      navigate("*");
    } else if (result !== undefined) {
      setDataLoading(false);
    }
  }, []);

  return (
    
    <div className={style.container}>
      {!dataLoading ? (
        <div>
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
      ) : null}
    </div>
  );
};

export default Accommodation;
