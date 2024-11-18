import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            console.log(data);
            if (data.success===true) {
                // localStorage.setItem('token', data.token);
                alert("Login Successfull")
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    }

return (
    <>
        <div className="container-fluid bg-[#d2d2d2] flex items-center flex-col justify-center min-h-[100vh]" >
            <form action='' onSubmit={handleLogin} className='Logform  bg-[#f0f0f0] p-10 rounded-md w-[30vw]'>

                <h3 className='text-center text-[26px] mb-5 mt-3 '>Log in</h3>
                <div className="inputBox">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Username" id='username' />
                </div>

                <div className="inputBox">
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" id='password' />
                </div>
                <button className='btnBig mt-3 mb-3' type='submit'>Log in</button>
                <p className='mb-3 mt-3 '>New User? .<Link to="/Signup" className='text-[#f57e57]'>Sign up</Link></p>
            </form>
        </div>


    </>
)
}

export default Login