import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[560px] rounded-lg overflow-hidden bg-[#252837] bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <Sidebar />
        <MessageContainer />
    </div>
  ) 
}

export default Home