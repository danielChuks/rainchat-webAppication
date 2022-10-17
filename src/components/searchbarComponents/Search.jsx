import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
          <input type="text" placeholder='Find a user'/>
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