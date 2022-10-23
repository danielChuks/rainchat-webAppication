import React, { useState } from 'react'

function Search() {
  const [username, setUsername] = useState("")
  const [user, setUser]= useState(null);
  const [error, setError]= useState(false);


  const handleSearch = () =>{
    
  }

  const handleKey = (e) =>{
    e.code === "Enter" && handleSearch()
  }

  return (
    <div className='search'>
      <div className="searchForm">
          <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"  alt=""/>
          <div className="userinfo">
            <span>Daniel</span>
            <p>Hello</p>
          </div>
      </div>
    </div>
  )
}

export default Search