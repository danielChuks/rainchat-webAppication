import React, { useState } from 'react'
import addAvatar from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage} from "../firebase"
import {ref,
    uploadBytesResumable,
    getDownloadURL 
  } from "firebase/storage";


function Register() {
  const [err, setErr] = useState(false)

  const onHandleSubmit = async (event) =>{
    event.preventDefault()
    const displayName = event.target[0].value
    const email = event.target[1].value
    const password = event.target[2].value
    const file = event.target[3].files[0]

     try {
       const res = await createUserWithEmailAndPassword(auth, email, password)

       const storageRef = ref(storage, displayName);

       const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            // Handle unsuccessful uploads
            setErr(true);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
              await updateProfile(res.user,{
                displayName,
                photoURL: downloadURL,
              })
            });
          }
        );
     } catch (err) {
      setErr(true)
     }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
                <span className="logo">Rain Chart</span>
                <span className="title"> Register </span>
            <form onSubmit={onHandleSubmit}> 
                <input type="text"  placeholder='Enter your name '/ >
                <input type="email"  placeholder='Enter your email '/ >
                <input type="password"  placeholder='Enter your password'/ >
                <input style={{display: "none"}} type="file" id="file" placeholder="select a file"/> 
                <label htmlFor="file">
                    <img src={addAvatar} alt="ava"/>
                    <span> Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span> }
            </form>
            <p>You have an accout? Login </p>
        </div>

    </div>
  )
}

export default Register