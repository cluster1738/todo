import React from 'react'

const todo = ({listItem, listTime}) => {
  return (
    <div>
        <h1>Task: {listItem}</h1>
        <h1>Finish By: {listTime}</h1>
    </div>
  )
}

export default todo