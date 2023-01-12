import React from "react";
import style from "./Profile.module.css";

const Profile = ({ name, picture }) => {
  const hostName = name.split(" ");

  return (
    <>
      <div className={style["name-container"]}>
        {hostName.map((name, index) => (
          <p className={style["host-name"]} key={index}>
            {name}
          </p>
        ))}
      </div>
      <img src={picture} alt="Profile" className={style.profile} />
    </>
  );
};

export default Profile;
