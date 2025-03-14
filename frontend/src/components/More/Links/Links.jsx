import { act, useState } from "react";
import Header from "../../../Header"
import Sidebar from '../../../Sidebar'

import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
const Links=()=>{
    const links=['Working Links','Broken Links','Image Links','Status Codes']
    const[activeTab,setActiveTab]=useState('Working Links')
    const renderWorkingLinks=()=>(
        <div className='d-flex justify-content-center align-items-center gap-5' >
            <a target='_blank' href='https://jalatechnologies.com/' 
            style={{ color:'red',textDecoration:'none'}}>Link1</a>
            <a target='_blank' href='https://www.google.com' 
            style={{ color:'blue',textDecoration:'none'}}>Link2</a>
            <a target='_blank' href='https://jalatechnologies.com/' 
            
            style={{ color:'green',textDecoration:'none'}}>Link3</a>
        </div>
    )
    const renderBrokenLinks=()=>(
        <div className='d-flex justify-content-center align-items-center gap-5'>
            <a target='_blank' href='https://magnus.jalatechnologies.com/www.brokenlinkcheck.com/' style={{ color:'red',textDecoration:'none'}}>Link1</a>
            <a target='_blank' href='https://magnus.jalatechnologies.com/www.brokenlinkcheck.com/' style={{ color:'blue',textDecoration:'none'}}>Link2</a>
            <a target='_blank' href='https://magnus.jalatechnologies.com/www.brokenlinkcheck.com/' style={{ color:'green',textDecoration:'none'}}>Link3</a>
        </div>
    )
    const renderImageLinks=()=>(
        <div className='d-flex justify-content-center align-items-center gap-5'>
            <a target='_blank' href='https://www.growictech.com/' ><img src='../../../assets/growicLogo.png'style={{width:150}}/></a>
            <a target='_blank' href='https://www.google.com' ><img src='../../../assets/googleLogo.webp' style={{width:150}}/></a>
            <a target='_blank' href='https://jalatechnologies.com/' ><img src='../../../assets/jalatLogo.png' style={{width:150}}/></a>
            <a target='_blank' href='https://www.linkedin.com/feed/' ><img src='../../../assets/linkedinLogo.jpg' style={{width:150}}/></a>
        </div>
    )
    const renderStatusCodes=()=>(
        <div className='d-flex justify-content-center align-items-center gap-5'>
            <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses' style={{color:'blue',textDecoration:'none'}}>200</a>
            <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages' style={{color:'red',textDecoration:'none'}}>301</a>
            <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses' style={{color:'green',textDecoration:'none'}}>404</a>
            <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses' style={{color:'orange',textDecoration:'none'}}>500</a>
        </div>
    )
    return(
        <div>
            <Header/>
            <div className="d-flex w-100    min-vh-100" style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar/>
                <div className="links-container  p-3 w-100">
                    <div className='d-flex justify-content-between'>
                        <h4>Links</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> Links</p>
                    </div>
                    <div className="p-3">
                        <div className="shadow p-3 rounded bg-white">
                            <div className="tabs-container">
                                {
                                    links.map((link,index)=>(
                                        <button 
                                        key={index}
                                        className='btn'
                                        style={{
                                            backgroundColor: activeTab === link ? 'white' : '#38b8db',
                                            color: activeTab === link ? 'black' : 'white',
                                            borderTop: activeTab === link ? '2px solid #38b8db' : 'none',
                                            padding: '8px',
                                            marginBottom: '5px',
                                            cursor: 'pointer',
                                            border: 'none'
                                        }}
                                        onClick={()=>setActiveTab(link)}>
                                            {link}
                                        </button>
                                    ))
                                }
                                <hr/>
                            </div>
                            <div className="content-container mb-3">
                                {activeTab==='Working Links' && renderWorkingLinks()}
                                {activeTab==='Broken Links' && renderBrokenLinks()}
                                {activeTab==='Image Links' && renderImageLinks()}
                                {activeTab==='Status Codes' && renderStatusCodes()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Links