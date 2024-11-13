import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <>
            <div className="container bg-[#d2d2d2] flex items-center flex-col justify-center min-h-[100vh]">
                <form action="" className='form'>
                    <h3 className='text-center text-[26px] mb-5 mt-3'>Sign Up</h3>
                    <div className="inputBox">
                        <input type="text" placeholder='Username' name="username" id="username" />
                    </div>
                    <div className="inputBox">
                        <input type="text" placeholder='Name' name="name" id="name" />
                    </div>
                    <div className="inputBox">
                        <input type="email" placeholder='Email' name="email" id="email" />
                    </div>
                    <div className="inputBox">
                        <input type="password" placeholder='Password' name="password" id="password" />
                    </div>
                    <button className="btnBig mt-3 mb-3">Sign Up</button>
                    <p className='mb-3 mt-3'>Already Have An Account <Link to="/login" className='text-[#F57E57]'>Login</Link></p>

                </form>
            </div>
        </>
    )
}

export default Signup
