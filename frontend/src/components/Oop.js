import React from 'react'
import { Navigate } from 'react-router-dom'


function Oop({image,title,description,buttontitle,buttonlink}) {
  return (
    <>
      <div className="flex flex-col min-h-[60vh] items-center justify-center">
        <img className='h-[100px] w-[100px]' src={image} alt="" />
        <h3 className="description text-[20px]">{description}</h3>
        <button className='btnNormal' onClick={()=>{Navigate(buttonlink)}}>{buttontitle}</button>

      </div>
    </>
  )
}

export default Oop
