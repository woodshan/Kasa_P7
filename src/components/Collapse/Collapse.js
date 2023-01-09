import React, { useState } from "react";
import open from "../../assets/icons/open.svg";
import close from "../../assets/icons/close.svg";
import style from "./Collapse.module.css";

const Collapse = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className={style["collapse-container"]}>
      <div className={style["collapse-content"]}>
        <div
          className={style["collapse-background"]}
          onClick={() => handleClick()}
        >
          <h3 className={style.title}>{title}</h3>
          {isOpen ? (
            <img src={close} alt="Fermer" className={style.arrow} />
          ) : (
            <img src={open} alt="Ouvrir" className={style.arrow} />
          )}
        </div>
        {isOpen ? (
          <div className={style["description-container"]}>{children}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Collapse;
