import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import style from "./Header.module.css";

const Header = ({ page }) => {
  return (
    <div className={style["header-container"]}>
      <img src={logo} alt="Kasa Logo" className={style.logo} />
      <div className={style["link-container"]}>
        <NavLink
          to="/"
          className={style[page === "home" ? "link-effect" : "link"]}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={style[page === "about" ? "link-effect" : "link"]}
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
