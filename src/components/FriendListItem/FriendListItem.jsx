import clsx from "clsx";
import style from "./FriendListItem.module.css";

// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.
// include <FriendsListItem avatar={} name={} isOnline={} />

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={style.container}>
      <img src={avatar} alt={name} width="48" />
      <p className={style.title}>{name}</p>
      <p className={clsx(isOnline ? style.online : style.offline)}>
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
