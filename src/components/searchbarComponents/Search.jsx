import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';


function Search() {
  const [username, setUsername] = useState("")
  const [user, setUser]= useState(null);
  const [error, setError]= useState(false);
  const {currentUser} = useContext(AuthContext)




  const handleSearch = async () =>{
    const q = query(collection(db, "users"), 
    where("displayName", "==", username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
     });
    } catch (error) {
      setError(true);
    }
  

  }

  const handleKey = (e) =>{
    e.code === "Enter" && handleSearch();
  }


  const handleSelect = async() => {
    //we check if the group (chats in firestore) exist if not we create.
    const combinedId = currentUser.uid > user.uid 
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid

      try {
        const res = await getDocs(db, "chats", combinedId)
        if(!res.exist()){
          //create a chat in the chat collection
          await setDoc((db, "chats", combinedId), {messages:[]})
        }
      } catch (error) {
        
      }
  }

  return ( 
    <div className='search'>
      <div className="searchForm">
          <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={(e)=> setUsername(e.target.value)}/>
      </div>

      {error && <span>User not found!</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt=""/>
          <div className="userinfo">
            <span>{user.displayName}</span>
          </div>
      </div> }
    </div>
  )
}

export default Search;