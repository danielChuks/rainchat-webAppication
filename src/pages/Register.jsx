import React, {  useState } from 'react'
import addAvatar from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db} from "../firebase"
import {ref,
    uploadBytesResumable,
    getDownloadURL 
  } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";



function Register() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()


  const onHandleSubmit = async (event) =>{
    event.preventDefault()
    const displayName = event.target[0].value
    const email = event.target[1].value
    const password = event.target[2].value
    const file = event.target[3].files[0]

     try {
      /**
       * res will hold the value we get when we assign the input value from the input to createUserWithEmailAndPassword
       * storageref we hold the function of "ref" that takes the file value the user uploaded and assign the display name as name of the file uploaded.
       * uploadTask calls the function that uploads the file.
       */
       const res = await createUserWithEmailAndPassword(auth, email, password)

       const storageRef = ref(storage, displayName);

       const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            // Handle unsuccessful uploads
            setErr(true);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(async(downloadURL) => {
              await updateProfile(res.user,{
                displayName,
                photoURL: downloadURL,
              });
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL
              }) 
              await setDoc(doc(db, "userChats", res.user.uid), {})
              navigate("/login")
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
            <p>You have an accout? <Link to="/login"> Login </Link> </p>
        </div>

    </div>
  )
}

export default Register;