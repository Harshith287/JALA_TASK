import Header from '../../../Header'
import Sidebar from '../../../Sidebar'
import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const Popups=()=>{
    const onPopup1=()=>{
        window.open('https://www.google.com/',history,'height=200,width=200')
    }
    const onPopup2=()=>{
        window.open('https://www.tutorialspoint.com/index.htm',history,'height=200,width=200')
    }
    const onPopup3=()=>{
        window.open('https://www.tutorialsteacher.com/',history,'height=200,width=200')
    }
    const onPopup4=()=>{
        window.open('/',history,'height=200,width=200')
    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <div>
            <Header/>
            <div className='d-flex w-100 min-vh-100' style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar/>
                <div className='p-3 w-100'>
                    <div className='d-flex justify-content-between'>
                        <h4>Popups</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> Popups</p>
                    </div>
                    <div className='p-3 '>
                            <div className='shadow w-75 rounded bg-white'>
                            <button 
                            className='btn'
                            style={{backgroundColor:'white',borderTop:'2px solid #3B8DBD', color:'#3B8DBD'}}>
                                Popups
                            </button>
                            <div className='btn-container d-flex flex-wrap justify-content-center align-items-center gap-5 p-5'>
                                 <button className='btn ' style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}}
                                 onClick={onPopup1}>Popup One</button>
                                 <button className='btn ' style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}} onClick={onPopup2}>Popup Two</button>
                                 <button className='btn 'style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}} onClick={onPopup3}>Popup Three</button>
                                 <button className='btn 'style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}} onClick={onPopup4}>Popup Duplicate</button>
                                 <button className='btn ' style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}}
                                 onClick={()=>window.open('/home/popups')}>Duplicate Tab</button>
                                 <button type='button' className='btn ' style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}} onClick={handleShow}
                                 >In Window Popup</button>
                                 <button className='btn ' style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}}
                                 onClick={()=>alert('This is an alert Box')}>Alert Box</button>
                                 <button className='btn ' style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}}
                                 onClick={()=>confirm('Confirm Message Box')}>Confirm Box</button>
                                 <button className='btn ' style={{backgroundColor:'#3B8DBD',color:'white',width:'170px'}}
                                 onClick={()=>prompt('Enter your name','JALA Academy- A Place to find your Dream Job')}>Prompt Box</button>

                                <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Popup One</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Popup One body..
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="danger" onClick={handleClose}>
                                            Close
                                        </Button>
                                        </Modal.Footer>
                                    </Modal>
                            </div>
                            <hr/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Popups


