import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import style from "./Header.module.css";

const Header = () => {
    return (
        <div className={style["header-container"]}>
            <img src={logo} alt="Kasa Logo" className={style.logo} />
            <div className={style["link-container"]}>
                <NavLink to="/" className={style.link}>Accueil</NavLink>
                <NavLink to="/about" className={style.link}>A Propos</NavLink>
            </div>
        </div>
    );
};

export default Header;