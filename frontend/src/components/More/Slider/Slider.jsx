import Header  from "../../../Header"
import Sidebar from '../../../Sidebar'
import { FaAngleRight, FaTrash } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
import { useState } from "react";
const Slider=()=>{
    const[value,setValue]=useState(0)
    return(
        <div>
            <Header/>
            <div className="min-vh-100 w-100 d-flex" style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar/>
                <div className="p-3 w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Slider</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> Slider</p>
                    </div>
                    <div className="p-3">
                        <div className="shadow bg-white">
                            <button 
                            className='btn'
                            style={{backgroundColor:'white',borderTop:'2px solid #3B8DBD', color:'#3B8DBD'}}>
                            Slider<hr/>
                            </button>
                            {/* <hr/> */}
                            <div className='content-container p-5'>
                                <input
                                type='range'
                                min='0'
                                max='100'
                                value={value}
                                onChange={(e)=>{setValue(e.target.value)}}
                                style={{width:'100%'}} />
                                <p>Current Value: {value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider