import React from 'react'
import { UserCard } from '../../atoms'

const UsersGrid = ({users , posts}) => {
  return (
    <div>
        {users?.map(user => {
           return <UserCard key={user.id} userId={user.id} name={user.name} posts={posts}/>
        })}
    </div>
  )
}

export default UsersGrid