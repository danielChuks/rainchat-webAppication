import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import Message from './Message';

function Messages() {
  const [ message, setMessage] =useState([])
  const {data} = useContext(ChatContext)


  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessage(doc.data().Messages)
    })

    return () => unSub()
  }, [data.chatId])


  return (
    <div className='messages'>
    {Messages.map=((m) => {
      <Message message={m} key={m.id}/>
    })}
    </div>
  )
}

export default Messages;