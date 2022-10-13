import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import Search from '../searchbarComponents/Search'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Navbar />
        <Search />

    </div>
  )
}

export default Sidebar