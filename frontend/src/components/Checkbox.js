import React, { useEffect } from 'react'



function Checkbox({check,setCheck,title}) {
    const toggelCheckbox = () =>{
        let checkBox = document.querySelector(".checkbox")
        checkBox.classList.toggle("active") 
        setCheck(!check)
    }

    useEffect(()=>{
        let checkBox = document.querySelector(".checkbox")
        check ? checkBox.classList.add("active") : checkBox.classList.remove("active")
    },[check])

    

  return (
    <>
      <div onClick={toggelCheckbox} className="flex items-center gap-3 mb-3">
        <div className="checkbox w-[20px] h-[20px] cursor-pointer bg-[grey]"></div>
        <p>Is important</p>
      </div>
    </>
  )
}

export default Checkbox
