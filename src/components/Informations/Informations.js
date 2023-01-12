import style from "./Informations.module.css";
import Rating from "../Rating/Rating";
import Tags from "../Tags/Tags";
import Profile from "../Profile/Profile";

const Informations = ({ data }) => {
  return (
    <div className={style.wrapper}>
      <div>
        <div className={style["location-container"]}>
          <h1 className={style.title}>{data.title}</h1>
          <h2 className={style.location}>{data.location}</h2>
        </div>
        <div className={style["tags-container"]}>
          <Tags tags={data.tags} />
        </div>
      </div>
      <div>
        <div className={style["profile-container"]}>
          <div className={style["star-container"]}>
            <Rating rates={data.rating} />
          </div>
          <div className={style["info-container"]}>
            <Profile name={data.host.name} picture={data.host.picture} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
