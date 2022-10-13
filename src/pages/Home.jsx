import React from 'react'
import Sidebar from '../components/sidebarComponents/Sidebar';
import Chat from '../components/chatComponents/Chat';

function Home() {
  return (
    <div className="home">
        <div className="container">
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home;