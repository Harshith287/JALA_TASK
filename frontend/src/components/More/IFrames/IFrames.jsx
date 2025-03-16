import Header from '../../../Header'
import Sidebar from '../../../Sidebar'

import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
const IFrames=()=>{
    return(
        <div>
            <Header/>
            <div className='frames-container w-100 d-flex min-vh-100' style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar/>
                <div className='p-3 w-100'>
                    <div className="d-flex justify-content-between">
                        <h4>iFrames</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> iFrames</p>
                    </div>
                    <div className='p-3'>
                        <div className='iframes-container shadow rounded bg-white '>
                            <button 
                            className='btn'
                            style={{backgroundColor:'white',borderTop:'2px solid #3B8DBD', color:'#3B8DBD'}}>
                                iFrames
                            </button>
                            <hr/>
                            <div className='p-5'>
                                <h2>Frame 1</h2>
                                <iframe 
                                src='https://jalaacademy.com/' 
                                title="jala"
                                style={{width:'100%', height:300}}>
                                </iframe>

                                <h2>Frame 2</h2>
                                <iframe 
                                src='https://www.techtarget.com/' 
                                title="techtarget"
                                style={{width:'100%', height:300}}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IFrames