import React from 'react';
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation, lastIdx, emoji}) => {

  const {selectedConversation,setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id=== conversation._id;

  return (
    <>
      <div 
      className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected? "bg-sky-500" : ""}
      `}
      onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt='user avatar'/>
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200 mx-2'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
        {/* <div className="avatar offline">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div> */}
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}

export default Conversation;



// import React from 'react';

// const Conversation = () => {
//   return (
//     <>
//       <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer'>
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//           </div>
//         </div>

//         <div className=' flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200 mx-2'>John Doe</p>
//             <span className='text-xl'>🎃</span>
//           </div>
          
//         </div>
//         {/* <div className="avatar offline">
//           <div className="w-24 rounded-full">
//             <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//           </div>
//         </div> */}
//       </div>
//       <div className='divider my-0 py-0 h-1'></div>
//     </>
//   )
// }

// export default Conversation;