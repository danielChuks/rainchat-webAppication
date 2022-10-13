import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'> Rain Chat</span>
        <div className="user">
          <img src='' alt=''/>
            <span>Daniel</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar