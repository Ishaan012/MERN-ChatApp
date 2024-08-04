import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered  bg-[#1D1F2B]'/>
        <button type='submit' className='btn btn-circle bg-[#6785FF] text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput;


// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered  bg-[#1D1F2B]'/>
//         <button type='submit' className='btn btn-circle bg-[#6785FF] text-white'>
//             <IoSearchSharp className='w-6 h-6 outline-none'/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput;