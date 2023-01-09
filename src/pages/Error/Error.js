import { NavLink } from "react-router-dom";
import style from "./Error.module.css";

const Error = () => {

  return (
    <div className={style["error-container"]}>
      <h1 className={style.error}>404</h1>
      <h3 className={style["error-description"]}>
        Oups! La page que vous demandez n'existe pas.
      </h3>
      <NavLink to="/" className={style.link}>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default Error;
