import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

import s from "./FriendListItem.module.css";

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>{friends.map(FriendListItem)}</ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FriendList;
