import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import accommodationsList from "../../datas/accommodationsList.json";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";

const Accommodation = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const { id } = useParams();

  const result = accommodationsList.find(
    (accommodation) => accommodation.id === id
  );

  return (
    <div>
      <Slideshow data={result} />
      <h1>{result.title}</h1>
      <Collapse title="Description">{result.description}</Collapse>
      <Collapse title="Équipements">{result.equipments}</Collapse>
    </div>
  );
};

export default Accommodation;
