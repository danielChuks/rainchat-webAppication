import React, { useContext, useEffect, useState } from 'react'
import {onSnapshot, doc} from "firebase/firestore"
import {AuthContext} from "../../context/AuthContext"
import { db } from '../../firebase';
import { ChatContext } from '../../context/ChatContext';




function Chats() {
  const [chats, setChats] = useState([]);

  const {currentUser} = useContext(AuthContext);
  const { dispatch }= useContext(ChatContext)

 useEffect(() => {
  const getChats = () => {
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data())
   });
   return ()=> unsub()
  }
 currentUser.uid && getChats()

 },[currentUser.uid])

 const handleSelect = (u) => {
   dispatch({ type: "CHANGE_USER", payload: u })
 }

  return (
    <div className='chats'>
    {Object.entries(chats)?.map((chats) => (
      <div className="userChat" 
          key={chats[0]} 
          onClick={() => handleSelect(chats[1].userInfo)}>

        <img src={chats[1].userInfo.photoURL} 
           alt=""/>
          <div className="userChatInfo">
            <span>{chats[1].userInfo.displayName}</span>
            <p>{chats[1].userInfo.lastmessage?.text}</p>
          </div>
      </div>
    ))}   
    </div>
  )
}

export default Chats