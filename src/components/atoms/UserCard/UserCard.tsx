import React from 'react';
import './UserCard.scss';
const UserCard = ({name='unnamed' , postCount=0}) => {

  return (
    <div className='user-card-parent'>
        <h3 className='user-name-container' >Name: {name}</h3>
        <h3 >Post: {postCount}</h3>
    </div>
  );
}

export default UserCard;