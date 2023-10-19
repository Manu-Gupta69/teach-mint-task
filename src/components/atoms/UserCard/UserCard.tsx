import React from 'react';
import './UserCard.scss';
import { useNavigate } from 'react-router-dom';


const UserCard = ({userId , name='unnamed' , posts}) => {
  const navigate = useNavigate();

  return (
    <div style={{textDecoration : "none"}} onClick={()=> navigate(`/user/${userId}`)}  className='user-card-parent'>
        <h3 className='user-name-container'> Name:{name} </h3>
        <h3> Post: {posts[userId].length}</h3>
    </div>
  );
}

export default UserCard;