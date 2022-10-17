import React from 'react';
import Sidebar from '../components/sidebarComponents/Sidebar';
import ChatScreen from '../components/ChatScreen/ChatScreen';

function Home() {
  return (
    <div className="home">
        <div className="container">
            <Sidebar />
            <ChatScreen />
        </div>
    </div>
  )
}

export default Home;