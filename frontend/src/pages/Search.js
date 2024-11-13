import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Note from '../components/Note.js'
import oppsimage from '../images/oops.webp'
import Oop from '../components/Oop.js'

function Search() {
  return (
    <>
      <Navbar/>
        <div className="flex items-center justify-end pr-4 pt-4">
            <input type="text" className='inputBox !w-[370px] !p-[5px]' placeholder='Search Notes'/>
        </div>
        
        {/* <div className="gridItems">
            <Note/>
        </div> */}

        <Oop image={oppsimage} description="No Search Results Found For Hacking "  buttontitle="Go Back" buttonLink="/"  />


      <Footer />
    </>
  )
}

export default Search
