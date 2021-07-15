import React from "react";
import PropTypes from "prop-types";

import s from "./FriendListItem.module.css";

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const friendStatus = isOnline ? s.statusOnline : s.statusOffline;
  return (
    <li key={id} className={s.item}>
      <span className={`${s.status} ${friendStatus}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
