import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'> Rain Chat</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=''/>
            <span>Daniel</span>
            <button onClick={ () => signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar;