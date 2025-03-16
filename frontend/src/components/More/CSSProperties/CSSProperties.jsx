import { useState } from 'react';
import Header from '../../../Header'
import Sidebar from '../../../Sidebar'
import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';
const CSSProperties=()=>{
    const tabs=['Links','Labels','Buttons','Alerts','Progress Bars']
    const [activeTab,setActiveTab]=useState('Links')
    const [alerts, setAlerts] = useState([
        { id: 1, type: 'success', message: 'Indicates a successful or positive action.' },
        { id: 2, type: 'info', message: 'Indicates a neutral informative change or action.' },
        { id: 3, type: 'warning', message: 'Indicates a warning that might need attention.' },
        { id: 4, type: 'danger', message: 'Indicates a dangerous or potentially negative action.' }
      ]);
      const handleClose = (id) => {
        setAlerts(alerts.filter(alert => alert.id !== id));
      };
    const onTabClick=(tab)=>{
        setActiveTab(tab)
    }
    const renderLinks=()=>(
        <div className='d-flex justify-content-center align-items-center gap-5' >
            <a target='_blank' href='https://jalatechnologies.com/' 
            style={{ color:'red',textDecoration:'none'}}>Link1</a>
            <a target='_blank' href='https://www.google.com' 
            style={{ color:'blue',textDecoration:'none'}}>Link2</a>
            <a target='_blank' href='https://jalatechnologies.com/' 
            
            style={{ color:'green',textDecoration:'none'}}>Link3</a>
        </div>
    )
    const renderLabels=()=>(
        <div className='d-flex justify-content-center align-items-center gap-3'>
            <span className='bg-secondary text-white p-1 rounded' style={{fontSize:'12px'}} >Default</span>
            <span className='bg-primary text-white p-1 rounded' style={{fontSize:'12px'}}>Primary</span>
            <span className='bg-success text-white p-1 rounded' style={{fontSize:'12px'}}>Success</span>
            <span className='bg-info text-white p-1 rounded' style={{fontSize:'12px'}}>Info</span>
            <span className='bg-warning text-white p-1 rounded' style={{fontSize:'12px'}}>Warning</span>
            <span className='bg-danger text-white p-1 rounded' style={{fontSize:'12px'}}>Danger</span>
        </div>
    )
    const renderButtons=()=>(
        <div className='d-flex justify-content-center align-items-center '>
            <button className='btn btn-secondary'>Default</button>
            <button className='btn btn-info'>Primary</button>
            <button className='btn btn-success'>Success</button>
            <button className='btn btn-warning'>Warning</button>
            <button className='btn btn-danger'>Danger</button>
        </div>
    )
    const renderAlerts=()=>(
        <div>
            {alerts.map(alert => (
        <div 
          key={alert.id} 
          className={`alert bg-${alert.type} d-flex text-white `}
        >
          <p>{alert.message}</p>
          <span className="close-btn " onClick={() => handleClose(alert.id)} style={{cursor:'pointer'}}>
            &times;
          </span>
        </div>
      ))}
        </div>
    )
    const renderProgressBars=()=>(
        <div className='d-flex flex-column gap-4'>
            <ProgressBar variant='success' now={40}/>
            <ProgressBar variant='info' now={20}/>
            <ProgressBar variant='warning' now={60}/>
            <ProgressBar variant='danger' now={80}/>
        </div>
    )
    return(
        <div>
            <Header/>
            <div className='properties-containeer min-vh-100 w-100 d-flex' style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar/>
                <div className='w-100 p-3'>
                    <div className='d-flex justify-content-between'>
                        <h4>CSS Properties</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> CSS Properties</p>
                    </div>
                    <div className='shadow p-3 rounded bg-white'>
                        <div className=' css-tab-container '>
                            {
                                tabs.map((tab,index)=>(
                                    <button 
                                    key={index}
                                    className='btn'
                                    style={{
                                        backgroundColor: activeTab === tab ? 'white' : '#38b8db',
                                        color: activeTab === tab ? 'black' : 'white',
                                        borderTop: activeTab === tab ? '2px solid #38b8db' : 'none',
                                        padding: '8px',
                                        marginBottom: '5px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={()=>onTabClick(tab)}>
                                        {tab}
                                    </button>
                                ))
                            }
                        </div>
                        <hr/>
                        <div className='css-content-container'>
                            {activeTab==='Links' && renderLinks()}
                            {activeTab==='Labels' && renderLabels()}
                            {activeTab==='Buttons' && renderButtons()}
                            {activeTab==='Alerts' && renderAlerts()}
                            {activeTab==='Progress Bars' && renderProgressBars()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CSSProperties