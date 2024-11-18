import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'
import Footer from '../components/Footer'

function Home() {

  let getNotes = () =>{
    let res = fetch("http://localhost:8000/getNotes",{
      mode:"cors",
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({uploadedBy:"shaan"})
    }).then(resp=>resp.json()).then(data=>{
      console.log(data);
      if(data.success){
        setData(data)
      }
      else{
        setError(data.msg)
      }
    })
  }

  useEffect(()=>{
    getNotes()
  },[])

  return (
    <div>
      <Navbar/>
      <div className='mt-[20px] flex items-center justify-between w-screen px-[50px]'>
        <h1 className='text-2xl'>Hi, Shaan</h1>
        <div className="inputBox !w-[350px]">
          <input type="text" name="" id=""  placeholder='Search Notes' className='!p-[11px]'/>
        </div>
      </div>

      <div className='gridItems'>
        <Note note={{title:"new Title",description:"New Description" ,date:"02/02/2024"}} index={1} / >
      </div>

      <Footer/>
    </div>
  )
}

export default Home
