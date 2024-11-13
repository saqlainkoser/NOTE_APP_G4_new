import React from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'
import Footer from '../components/Footer'

function Profile() {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-between w-screen h-[300px] bg-[#d4d4d4] px-[50px]">
                <div className='flex items-center gap-[10px]'>
                    <div className="profileCircle w-[150px] h-[150px] rounded-[50%] bg-[#F57E57]"></div>
                    <div>
                        <h3 className='text-2xl'>SHAAN ANSARI</h3>
                        <p>Joined In 2/3/2024</p>
                    </div>
                </div>

                <div className='relative h-[40%] px-[50px]'>
                    <div className='flex items-center gap-[10px] text-[grey]'>Total Notes :3 | Improtant Notes:1 </div>
                    <div className="absolute bottom-0 flex items-center gap-[10px]">
                        <button className='btnNormal'>Add Pic</button>
                        <button className='btnNormal'>Add Note</button>
                    </div>
                </div>
            </div>

            <div className='w-screen px-[50px] mt-5'>
                <h3 className='text-[26px]'>Your  <span className='text-[#F57E57]'>Important</span>  Notes</h3>
            </div>

            <div className="gridItems">
                <Note/>
            </div>

            <div className='w-screen px-[50px] mt-5'>
                <h3 className='text-[26px]'>Your  <span className='text-[#F57E57]'>Normal</span>  Notes</h3>
            </div>

            <div className="gridItems mt-2">
                <Note/>
                <Note/>
                <Note/>
                <Note/>
            </div>

            <Footer/>
        </div>
    )
}

export default Profile
