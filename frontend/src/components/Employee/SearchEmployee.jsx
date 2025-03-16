import Header from '../../Header'
import Sidebar from '../../Sidebar'
import './SearchEmployee.css'
import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const SearchEmployee=()=>{
    const[name,setName]=useState('')
    const[mobileNo,setMobileNo]=useState('')
    const[employees,setEmployees]=useState([])
    
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const [editMode,setEditMode]=useState(false)
    const[deleteMode,setDeleteMode]=useState(false)
    const[selectedEmployee,setSelectedEmployee]=useState(null)
    const[deleteId,setDeleteId]=useState(null)


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNo: '',
        email: '',
        gender: '',
        dob: '',
        country: '',
        city: ''
    });

    useEffect(() => {
        fetchEmployees();
      }, []);


      const fetchEmployees = async () => {
        const response = await fetch('http://localhost:5000/api/employees');
        const data = await response.json();
        setEmployees(data);
        setFilteredEmployees(data);
        console.log(data)
      };


    const onSubmit = (e) => {
        e.preventDefault();
    
        const searchName = name.trim().toLowerCase();
        const searchMobile = mobileNo.trim();
    
        if (!searchName && !searchMobile) {
            setFilteredEmployees(employees); 
            return;
        }

        if(!mobileNo)
        {
            const result = employees.filter((item) => {
                const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
                return (
                    (searchName && fullName.includes(searchName)) || 
                    (searchMobile && item.mobileNo.includes(searchMobile))
                );
            });
            setFilteredEmployees(result);
            return;
        }
    
        const result = employees.filter((item) => {
            const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
            return (
                (searchName && fullName.includes(searchName)) && 
                (searchMobile && item.mobileNo.includes(searchMobile))
            );
        });
    
        setFilteredEmployees(result);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toISOString().split('T')[0];
      };

      const onClear=()=>{
        setName('')
        setMobileNo('')
        setFilteredEmployees(employees);
        setEditMode(false)
      }

      const onEdit=(employee)=>{
        setEditMode(true)
        setSelectedEmployee(employee)
        setFormData({
            firstName: employee.firstName,
            lastName: employee.lastName,
            mobileNo: employee.mobileNo,
            email: employee.email,
            gender: employee.gender,
            dob: formatDate(employee.dob),
            country: employee.country,
            city: employee.city
        });
      }

      const onUpdate = async (e) => {
        e.preventDefault();
        if (!selectedEmployee) return;
        try {
            await axios.put(`http://localhost:5000/api/employees/${selectedEmployee._id}`, formData);
            fetchEmployees();
            onClear()
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    const onDelete =  (id) => {
        setDeleteMode(true)
        setDeleteId(id)
    };
    
    const handleClose = () => {
        setDeleteMode(false)
        setDeleteId(null)
    }

    const deleteRecord=async()=>{
        const id=deleteId
        try {
            await axios.delete(`http://localhost:5000/api/employees/${id}`);
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
        handleClose()
    }
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


     return (
        <div>
            <Header />
            <div className='app-container d-flex  min-vh-100' >
                <Sidebar />
                <div className='employee-container p-3 w-100' >
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4>Employee <span className='text-muted' style={{ fontSize: '18px' }}>Search</span></h4>
                        <Link to='/employee/create'>
                            <button className='btn btn-info'>Add Employee</button>
                        </Link>
                    </div>
                    <p className='route'><FaTachometerAlt /> Home <FaAngleRight /> Employee <FaAngleRight /> Search</p>
                    <div className='employee-details-container p-3 shadow ' >
                        {editMode ? (
                            <form onSubmit={onUpdate}>
                                <h6>Edit Employee</h6>
                                <hr />
                                <div className='row mb-3'>
                                    {Object.keys(formData).map((key) => (
                                        <div className='col-md-6 mb-3' key={key}>
                                            <label className='form-label'>
                                                {key}
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button type='submit' className='btn btn-success'>Update</button>
                                <button type='button' className='btn btn-danger ms-2' onClick={onClear}>Cancel</button>
                            </form>
                        ) : (
                            <>
                                <h6>Search Employee</h6>
                                <hr />
                                <form onSubmit={onSubmit}>
                                    <div className='row mb-3 align-items-center'>
                                        <div className='col-md-4'>
                                            <label className='form-label'>Name</label>
                                            <input
                                                type='text'
                                                placeholder='Employee Name'
                                                className='form-control'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className='col-md-4'>
                                            <label className='form-label'>Mobile No</label>
                                            <input
                                                type='text'
                                                placeholder='Mobile No'
                                                className='form-control'
                                                value={mobileNo}
                                                onChange={(e) => setMobileNo(e.target.value)}
                                            />
                                        </div>
                                        <div className='col-md-4 d-flex justify-content-end mt-4'>
                                            <button type='submit' className='btn btn-success'>Search</button>
                                            <button type='button' className='btn btn-danger' onClick={onClear}>Clear</button>
                                        </div>
                                    </div>
                                </form>
                                {filteredEmployees.length > 0 && (
                                    <table border="1" className='styled-table shadow'>
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Mobile No</th>
                                                <th>Email Id</th>
                                                <th>Gender</th>
                                                <th>Birth Date</th>
                                                <th>Country</th>
                                                <th>City</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredEmployees.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.mobileNo}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{formatDate(item.dob)}</td>
                                                    <td>{item.country}</td>
                                                    <td>{item.city}</td>
                                                    <td>
                                                        <button className='btn btn-success ' style={{width:'40px',height:'30px',fontSize:'12px',paddingLeft:'8px'}} onClick={() => onEdit(item)}>Edit</button>
                                                        <button className='btn btn-danger' style={{width:'50px',height:'30px',fontSize:'12px',paddingLeft:'8px'}} onClick={() => onDelete(item._id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </>
                        )}

                            <Modal show={deleteMode} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Delete</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure you want to delete this data
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="success" onClick={deleteRecord}>
                                    Delete
                                </Button>
                                </Modal.Footer>
                            </Modal>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default SearchEmployee