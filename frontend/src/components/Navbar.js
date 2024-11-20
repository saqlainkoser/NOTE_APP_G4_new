import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(lnk) {
  return (
    <div>
      <div className="navbar w-screen h-[90px] bg-[#f4f4f4] px-[50px] flex items-center justify-between">
        <div className="logo text-2xl">Keep Notes</div>

        <div className="right flex items-center gap-[10px]">
            <button  className='btnNormal'><Link to="/addnewnote">Add Notes</Link></button>
            <div className="profileCircle w-[50px] h-[50px] rounded-[50%] bg-[#D9D9D9]"></div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
