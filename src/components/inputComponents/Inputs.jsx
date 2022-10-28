import React, { useContext, useState } from 'react';
import Attach from "../../img/attach.png";
import Img from "../../img/img.png"
import {ChatContext} from "../../context/ChatContext"
import { AuthContext } from '../../context/AuthContext';
import { updateDoc, doc, arrayUnion, Timestamp } from 'firebase/firestore';
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
    const storageRef = ref(storage );

    const uploadTask = uploadBytesResumable(storageRef, img);
  }else{
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id:uuid,
        text,
        senderId: currentUser,
        date: Timestamp.now()
      })
    })
  }
}

  return (
    <div className='input'>
     <input  type="text" placeholder="Type something...." onChange={e => e.target.value}/>
      <div className='send'>
        <img src={Attach} alt=""/>
        <input type="file" style={{display: "none" }} id="file" onChange={e=> setImg(e.target.files[0])}/>      
        <label htmlFor="file">
          <img src={Img} alt=""/>
        </label>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  )
}

export default Inputs; 