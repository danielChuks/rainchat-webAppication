import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import Search from '../searchbarComponents/Search'
import Chats from '../chatsComponents/Chats'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Navbar />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar;