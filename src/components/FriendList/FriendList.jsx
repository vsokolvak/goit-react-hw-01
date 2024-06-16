import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

// friends - масив об'єктів друзів
// includes <FriendList friends={} />

function FriendList({friends}) {
  return (
    <ul className={style.container}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;