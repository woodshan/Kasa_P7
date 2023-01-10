import style from "./Informations.module.css";
import pinkStar from "../../assets/icons/pinkStar.svg";
import greyStar from "../../assets/icons/greyStar.svg";

const Informations = ({ data }) => {
  const rating = parseInt(data.rating);

  const hostName = data.host.name.split(" ");

  const listStars = [];

  const handleStars = () => {
    for (let i = 0; i < rating; i++) {
      listStars.push(
        <img src={pinkStar} alt="Étoile" key={i} />
      );
    }
    if(rating < 5) {
      for (let i = 0; i < 5 - rating; i++) {
        listStars.push(
          <img src={greyStar} alt="Étoile" key={`${data.id}-${i}`} />
        );
      }
    }
    return listStars
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style["location-container"]}>
          <h1 className={style.title}>{data.title}</h1>
          <h2 className={style.location}>{data.location}</h2>
        </div>
        <div className={style["profile-container"]}>
          <div className={style["name-container"]}>
            {hostName.map((name, index) => (
            <p className={style["host-name"]} key={index}>{name}</p>
          ))}
          </div>
          <img
            src={data.host.picture}
            alt="Profile"
            className={style.profile}
          />
        </div>
      </div>
      <div className={style.notes}>
        <div className={style["tags-container"]}>
          {data.tags.map((tags, index) => (
            <span className={style.tag} key={index}>
              {tags}
            </span>
          ))}
        </div>
        <div className={style["star-container"]}>
          {handleStars()}
        </div>
      </div>
    </div>
  );
};

export default Informations;
