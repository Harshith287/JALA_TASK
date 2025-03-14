import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup=()=>{
    const [name,setName]=useState()
    const[email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:5000/register',{name,email,password})
        .then(res=>{
            console.log(res)
            navigate('/')
        }
    )
        .catch(err=>console.log(err))
    }
    return(
        <div className='d-flex justify-content-center align-items-center vh-100' style={{backgroundColor:'#D3D6DA'}}>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'>
                            <strong>Name</strong>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            name='name'
                            className='form-control'
                            required
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
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
                        Signup
                    </button>
                </form>
                <p>Already Have An Account</p>

                <Link to='/' className='btn btn-secondary w-100'>
                    Login
                </Link>
            </div>
        </div>
    )
}
export default Signup