import React from "react";
import style from "./Tags.module.css";

const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((tags, index) => (
        <span className={style.tag} key={index}>
          {tags}
        </span>
      ))}
    </>
  );
};

export default Tags;
