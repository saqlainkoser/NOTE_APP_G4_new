import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'
import Footer from '../components/Footer'

function Home() {
  const [data, setData] = useState(null);
  const [error,setError] = useState("");

  let getNotes = () =>{
    let res = fetch("http://localhost:8000/getNotes",{
      mode:"cors",
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({uploadedBy:"shaan"})
    }).then(resp=>resp.json()).then(data=>{
      if(data.length >0){
        console.log(data);
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
      <Navbar lnk='/addnewnote'/>
      <div className='mt-[20px] flex items-center justify-between w-screen px-[50px]'>
        <h1 className='text-2xl'>Hi, Shaan</h1>
        <div className="inputBox !w-[350px]">
          <input type="text" name="" id=""  placeholder='Search Notes' className='!p-[11px]'/>
        </div>
      </div>

      <div className='gridItems'>
        {/* <Note note={{title:"new Title",description:"New Description" ,date:"02/02/2024"}} index={1} / > */}


      {
        data ? data.map((el,index)=>{
          return(
            <Note key={index} note={el} index={index} />
          )
        }) : "No Notes Found"
      }

      </div>

      <Footer/>
    </div>
  )
}

export default Home
