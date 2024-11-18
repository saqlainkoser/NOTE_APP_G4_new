import React ,{useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'



function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error,setError] =useState('');

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res= await fetch("http://localhost:8000/signup",{
            method: "POST",
            mod:"cors",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                username
            })
        })
        let data= await res.json();
        console.log(data);
        if(data.sucess === true){
            alert("Signup Successfull");
            navigate('/login');
        }
        else{
            setError(data.message);
            alert(data.message);
        }
    }



    return (
        <>
            <div className="container bg-[#d2d2d2] flex items-center flex-col justify-center min-h-[100vh]">
                <form action="" onSubmit={handleSubmit} className='form'>
                    <h3 className='text-center text-[26px] mb-5 mt-3'>Sign Up</h3>
                    <div className="inputBox">
                        <input onChange={(e)=>setUsername(e.target.value)}  value={username} type="text" placeholder='Username' name="username" id="username" />
                    </div>
                    <div className="inputBox">
                        <input onChange={(e)=>setName(e.target.value)}  value={name} type="text" placeholder='Name' name="name" id="name" />
                    </div>
                    <div className="inputBox">
                        <input onChange={(e)=>setEmail(e.target.value)}  value={email} type="email" placeholder='Email' name="email" id="email" />
                    </div>
                    <div className="inputBox">
                        <input  onChange={(e)=>setPassword(e.target.value)}  value={password}  type="password" placeholder='Password' name="password" id="password" />
                    </div>
                    <button className="btnBig mt-3 mb-3">Sign Up</button>
                    <p className='mb-3 mt-3'>Already Have An Account <Link to="/login" className='text-[#F57E57]'>Login</Link></p>

                </form>
            </div>
        </>
    )
}

export default Signup
