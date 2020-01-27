import React from 'react'

import './style.css'

import Avatar from '../../../UI/Avatar'

export const ActivityAuthor = ({ user, community, createdAt }) => {
  const dateObj = new Date(createdAt)
  const date = dateObj.toLocaleDateString('ru')
  const time = dateObj.toLocaleTimeString('en-GB', { timeStyle: 'short' })
  return (
    <div className="ActivityAuthor">
      <Avatar
        type="user"
        size="xs"
        alt={user}
        className="ActivityAuthor__Avatar"
      />
      <div>
        <p className="ActivityAuthor__Name">
          {user}
          {community && `, ${community}`}
        </p>
        <p className="ActivityAuthor__Date">{`Создана ${date} в ${time}`}</p>
      </div>
    </div>
  )
}
