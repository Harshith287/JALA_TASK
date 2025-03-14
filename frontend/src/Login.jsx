import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import './Login.css'
const Login=()=>{
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',{email,password})
        .then(res=>{
            if(res.status===200)
            {
                localStorage.setItem("token", res.data.token);
                navigate('/home')
            }
        console.log(res)    
        }
    )
        .catch(err=>console.log(err))
    }
    return(
        <div className='main-container d-flex flex-column  align-items-center  vh-100 '>
            <h1 className='heading mt-4'>JALA Academy</h1>
            <p className='details'>Use the below details to Login</p>
             <p className='email'>Email : training@jalaacademy.com</p>
            <p className='email'>Password : jobprogram</p>
            <p className='learn w-25'>
            Learn everything on Real-Time Scenarios. FREE for <br></br>all.
            </p>
            <div className='bg-white p-3 rounded w-25'>
                <p className='signin'>Log in</p>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Email'
                            name='email'
                            className='form-control'
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Password'
                            name='password'
                            className='form-control'
                            required
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>
                        Login
                    </button>
                </form>
                <p>Don't Have An Account</p>

                <Link to='/register' className='btn btn-secondary w-100'>
                    Sign Up
                </Link>
            </div>
            <p className='message m-4 p-3'>
            JALA Academy offers Job Guaranteed Programs for Freshers to 12 years’ experience on Full Stack Development / Automation Testing / Dev-Ops / QA/ SDET/Cyber Security / RPA / Cloud Technologies. 
            Training would be completely on live Project scenarios Read our website JALA Academy for more details : <a className='link' target='_blank' href='https://jalaacademy.com/ '>https://jalaacademy.com/</a>  
            </p>
        </div>
    )
}
export default Login