import Header from "../../../Header"
import Sidebar from '../../../Sidebar'
import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
import { useState } from "react";
const Tooltips=()=>{
    const [text, setText] = useState("You have not clicked this BUTTON yet. Please click me to check the tooltip")
    const onClick=()=>{
        setText('Thank you for being here!')
    }
    return(
        <div>
            <Header/>
            <div className=" d-flex w-100 min-vh-100" style={{ backgroundColor: '#ECEFF1' }}    >
                <Sidebar/>
                <div className="w-100 p-3">
                <div className="d-flex justify-content-between">
                    <h4>Tooltip</h4>
                    <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> Tooltip</p>
                </div>
                <div className="p-3" >
                    <div className="shadow rounded bg-white " style={{height:'30vh'}} >
                        <button 
                        className='btn'
                        style={{backgroundColor:'white',borderTop:'2px solid #3B8DBD', color:'#3B8DBD'}}>
                            Tooltips
                        </button>
                        <hr/>
                        <div className="d-flex justify-content-center align-items-center mb-3" >
                            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title={text} onClick={onClick}>
                            Tooltip on bottom
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Tooltips