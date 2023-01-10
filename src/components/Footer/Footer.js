import React from "react";
import logo from "../../assets/images/footer-logo.svg";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style["footer-container"]}>
      <img src={logo} alt="Kasa Logo" className={style.logo} />
      <p className={style.copyright}>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
