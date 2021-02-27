import React from 'react';
import Friend from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={s.item}>
            <Friend avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  ),
};

export default FriendList;
