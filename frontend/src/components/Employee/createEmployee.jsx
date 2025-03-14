import Header from '../../Header'
import Sidebar from '../../Sidebar'
import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
import './createEmployee.css'
import { use, useState } from 'react';
import axios from 'axios'
const Employee=()=>{

     const skillsOptions = ['AWS', 'DevOps', 'Full Stack Developer', 'Middleware', 'QA-Automation', 'WebServices'];
    const [formData,setFormData]=useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        dob: '',
        gender: '',
        address: '',
        country: '',
        city: '',
        skills: []
    })

    const handleChange=(e)=>{
        const{name,value,type,checked}=e.target
        if(type=='checkbox')
        {
            setFormData((prevData)=>({
                ...prevData,
                skills:checked?
                [...prevData.skills,value]
                :prevData.skills.filter((skill)=>skill!=value)
            }))
        }
        else
        {
            setFormData({...formData,[name]:value})
        }
    }

     const onSubmit=async (e)=>{
        e.preventDefault()
        const{firstName,lastName,email,mobileNo}=formData
        if(!firstName || !lastName || !email || !mobileNo)
            alert('Please Fill all the Details')

        try {
            const response=await fetch('http://localhost:5000/api/employees', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), 
              });
           
            alert('Employee added successfully!');
                        const data = await response.json();
                        console.log('Database Updated Successfully:', data);
                    setClear()
                
          } catch (error) {
            console.log('Error:', error);
          }
      
     }

     const setClear=()=>{
        setFormData({
            firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        dob: '',
        gender: '',
        address: '',
        country: '',
        city: '',
        skills: []
        })
     }

    return(
        <div>
            <Header/>
            <div className='app-container d-flex w-100' style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar className='menuContainer'/>
                <div className='employee-container p-3 '>
                    <h4>Employee</h4>
                    {/* <p>Create</p> */}
                    <div>
                        <p><FaTachometerAlt/> Home <FaAngleRight/>  Employee <FaAngleRight/>  Create</p>
                    </div>
                    <div className='employee-details-container shadow p-3'>
                        <h6>Employee Details</h6>
                        <hr>
                        </hr>
                        <form onSubmit={onSubmit} >
                            <div className='row'>
                                <div className='col-md-4 mb-3'>
                                    <label className="form-label">First Name</label>
                                    <input name="firstName"   placeholder="First Name" value={formData.firstName} onChange={handleChange} className="form-control" required/>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label className="form-label">Last Name</label>
                                    <input name="lastName"   placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="form-control" required/>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label className="form-label">Email</label>
                                    <input name="email"   placeholder="Email" className="form-control" value={formData.email} onChange={handleChange} required/>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label className="form-label">Mobile No</label>
                                    <input name="mobileNo"   placeholder="Mobile No" value={formData.mobileNo} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label className="form-label">Date of Birth</label>
                                    <input name="dob"   placeholder="Mobile No" value={formData.dob} onChange={handleChange} className="form-control" type='date' required />
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label className='form-label'>Gender</label>
                                    <br></br>
                                    <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="form-check-input" id='Male' />
                                    <label className="form-check-label" htmlFor='Male' style={{cursor:'pointer'}}>Male</label>
                                    <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="form-check-input " id='Female' />
                                    <label className="form-check-label " htmlFor='Female' style={{cursor:'pointer'}}>Female</label>
                                </div>
                                <div className='col-md-12 mb-3'>
                                    <label className="form-label">Address</label>
                                    <textarea name="address"   placeholder="Address" value={formData.address} onChange={handleChange} className="form-control"  />
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label className="form-label">Country</label>
                                    <input name="country"   placeholder="Country" value={formData.country} onChange={handleChange} className="form-control" />
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label className="form-label">City</label>
                                    <input name="city"   placeholder="City" value={formData.city} onChange={handleChange} className="form-control" />
                                </div>

                                <h6 className='mt-3'>Skills</h6>
                                <hr>
                                </hr>
                                
                            </div>
                            
                            <div className='row'>
                            {skillsOptions.map((skill) => (
                                <div key={skill} className="col-md-3">
                                    <div className="form-check">
                                    <input type="checkbox" name="skills" value={skill} checked={formData.skills.includes(skill)} onChange={handleChange}  className="form-check-input" id={skill} style={{cursor:'pointer'}} />
                                    <label className="form-check-label" htmlFor={skill} style={{cursor:'pointer'}} >{skill}  </label>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <hr></hr>
                            <div className='btn-container'>
                                <button className='btn btn-success' type='submit'>Save</button>
                                <button className='btn btn-danger' onClick={setClear}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Employee