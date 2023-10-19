import React from 'react'
import { UserCard } from '../../atoms'

const UsersGrid = ({users}) => {
  
  return (
    <div>
        {users?.map(user => {
           return <UserCard key={user.id} name={user.name} postCount={user.postCount}/>
        })}
    </div>
  )
}

export default UsersGrid