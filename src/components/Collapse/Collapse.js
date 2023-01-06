import React, { useState } from "react";
import open from "../../assets/icons/open.svg";
import close from "../../assets/icons/close.svg";
import style from "./Collapse.module.css";

const Collapse = () => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClick = () => {
    if (isOpen === open) {
      setIsOpen(close);
    } else if (isOpen === close) {
      setIsOpen(open);
    }
  };

  return (
    <div className={style["collapse-container"]}>
      <div className={style["collapse-background"]}>
        <h3>Fiabilité</h3>
        <img
          src={isOpen}
          alt="Ouvrir"
          className={style.open}
          onClick={() => handleClick()}
        />
      </div>
      {isOpen === close ? (
        <div className={style["description-container"]}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      ) : null}
      <div className={style["collapse-background"]}>
        <h3>Respect</h3>
        <img
          src={isOpen}
          alt="Ouvrir"
          className={style.open}
          onClick={() => handleClick()}
        />
      </div>
      {isOpen === close ? (
        <div className={style["description-container"]}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      ) : null}
      <div className={style["collapse-background"]}>
        <h3>Service</h3>
        <img
          src={isOpen}
          alt="Ouvrir"
          className={style.open}
          onClick={() => handleClick()}
        />
      </div>
      {isOpen === close ? (
        <div className={style["description-container"]}>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
      ) : null}
      <div className={style["collapse-background"]}>
        <h3>Responsabilité</h3>
        <img
          src={isOpen}
          alt="Ouvrir"
          className={style.open}
          onClick={() => handleClick()}
        />
      </div>
      {isOpen === close ? (
        <div className={style["description-container"]}>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Collapse;
