import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase';


function Search() {
  const [username, setUsername] = useState("")
  const [user, setUser]= useState(null);
  const [error, setError]= useState(false);




  const handleSearch = async () =>{
    const q = query(collection(db, "users"), 
    where("displayName", "==", username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log(user)
     });
    } catch (error) {
      setError(true);
    }
  

  }

  const handleKey = (e) =>{
    e.code === "Enter" && handleSearch();
  }

  return (
    <div className='search'>
      <div className="searchForm">
          <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div className="userChat">
        <img src={user.photoURL}  alt=""/>
          <div className="userinfo">
            <span>{user.displayName}</span>
          </div>
      </div>
    </div>
  )
}

export default Search;