import React, { useContext, useState } from 'react';
import Attach from "../../img/attach.png";
import Img from "../../img/img.png"
import {ChatContext} from "../../context/ChatContext"
import { AuthContext } from '../../context/AuthContext';
import { updateDoc, doc, arrayUnion, Timestamp, serverTimestamp } from 'firebase/firestore';
import {v4 as uuid } from "uuid"
import {db, storage} from "../../firebase";
import {uploadBytesResumable, ref, getDownloadURL} from "firebase/storage"

function Inputs() {
  const [text, setText] =useState("")
  const [img, setImg] = useState(null);

  const {data} =useContext(ChatContext)
  const {currentUser} =useContext(AuthContext)

const handleSend = async () => {

  if(img){
   const storageRef = ref(storage, uuid());

    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on((error) => {

    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
            img: downloadURL
          }),
        })
      })
    })
  }else{
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id:uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now()
      })
    })
  }

  ///we are updateing the user chat to update the messages of the users on the latest message notification/ preview on the side bar.
  await updateDoc(doc(db, "userChats", currentUser.uid), {
    [data.chatId + ".lastMessages"]: {
      text,
    },
    [data.chatId + ".date"]:serverTimestamp(),
  })

  //We are also updating the other users end to received the latest message preview
  await updateDoc(doc(db, "userChats", data.user.uid), {
    [data.chatId + ".lastMessages"]: {
      text
    },
    [data.chatId + ".date"]:serverTimestamp()
  })
  setText("")
  setImg(null)
}

const sendPress = (e) =>{
  e.code === "Enter" && handleSend();
}

  return (
    <div className='input'>
      <input  type="text" 
            placeholder="Type something...." 
            onChange={e => setText(e.target.value)}
            value={text}
            onKeyDown={sendPress}
          />
      <div className='send'>
        <img src={Attach} alt=""/>
        <input type="file" 
            style={{display: "none" }} 
            id="file" 
            onChange={e=> setImg(e.target.files[0])}
          />      
        <label htmlFor="file">
          <img src={Img} alt=""/>
        </label>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  )
}

export default Inputs; 