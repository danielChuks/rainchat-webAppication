import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';



function Message({message}) {
const {currentUser} = useContext(AuthContext);
const {data} = useContext(ChatContext)

  console.log(message)
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={} alt=''/>
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src={} alt=''/>
      </div>
    </div>
  )
}

export default Message;