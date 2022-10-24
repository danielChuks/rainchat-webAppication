import React from 'react'
import Add from '../../img/add.png'
import more from '../../img/more.png'
import Cam from '../../img/cam.png'
import Messages from '../messageComponents/Messages';
import Inputs from "../inputComponents/Inputs";

function ChatScreen() {
  return (
    <div className='chatScreen'>
        <div className="chatScreenInfo">
          <span>Jane</span>
          <div className="chatScreenIcons">
            <img src={Cam} alt=''/>
            <img src={Add} alt=''/> 
            <img src={more} alt=''/>
          </div>
        </div>
        <Messages />
        <Inputs />
    </div>
  )
}

export default ChatScreen;