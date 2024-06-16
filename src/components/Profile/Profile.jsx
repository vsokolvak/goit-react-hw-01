import style from "./Profile.module.css";

// name — ім'я користувача
// tag — тег в соціальній мережі без @
// location — місто і країна
// image — посилання на зображення
// stats — об'єкт з інформацією про активності
// include <Profile name={'name'} tag={'tag'} location={'location'} image={'image'} stats={'stats'}/>

function Profile({
    name, tag, location, image, stats:{followers, views, likes}
}) {

  return (
    <div className={style.container}>
      <div className={style.info}>
        <img
          className={style.infoImg}
          width={150}
          height={150}
          src={image}
          alt={"photo " + name}
        />
        <p className={style.infoTitle + ' ' + style.infoText}>{name}</p>
        <p className={style.infoText}>@{tag}</p>
        <p className={style.infoText}>{location}</p>
      </div>

      <ul className={style.List}>
        <li className={style.item}>
          <span className={style.itemText}>Followers</span>
          <span className={style.itemNumber}>{followers}</span>
        </li>
        <li className={style.item}>
          <span className={style.itemText}>Views</span>
          <span className={style.itemNumber}>{views}</span>
        </li>
        <li className={style.item}>
          <span className={style.itemText}>Likes</span>
          <span className={style.itemNumber}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;