import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import style from "./Header.module.css";

const Header = ({ currentPage }) => {
  return (
    <div className={style["header-container"]}>
      <NavLink to="/" className={style["logo-link"]}>
        <img src={logo} alt="Kasa Logo" className={style.logo} />
      </NavLink>
      <div className={style["link-container"]}>
        <NavLink
          to="/"
          className={style[currentPage === "/" ? "link-effect" : "link"]}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={style[currentPage === "/about" ? "link-effect" : "link"]}
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
