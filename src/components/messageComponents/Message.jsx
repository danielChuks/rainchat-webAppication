import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1600" alt=''/>
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src='https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
      </div>
    </div>
  )
}

export default Message;