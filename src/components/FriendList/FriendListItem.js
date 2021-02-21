import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import defaultImg from "../Profile/ProfileImg.png";

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <span className={s.status}></span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
};

Friend.defaultProps = {
  avatar: defaultImg,
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]).isRequired,
};
export default Friend;
