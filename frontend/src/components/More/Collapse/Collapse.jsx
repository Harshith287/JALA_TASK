import { useState } from 'react';
import Header from '../../../Header'
import Sidebar from '../../../Sidebar'
import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
const Collapse=()=>{
    const[activeTab,setActiveTab]=useState('Single Collapse')
    const tabs=['Single Collapse','Multiple Collapse']
    const onTabChange=(tab)=>{
        setActiveTab(tab)
    }
    const text = [
       {
        heading:'Know your goals and Prioritize Wisely',
        content:'What are your priorities for the day? Make a list of your priorities and plan your day. The tasks of the day must be outlined with the most important and urgent ones on top.\n\nLikewise, determine your short-term and long-term goals and evaluate your progress frequently.'
       },
       {
        heading:'Be focused and Eliminate Distractions',
        content:'Are you really present physically and mentally. Try to block out all distractions so that you have'
       },
       {
        heading:'Choose the right mentor to Succeed in career',
        content:'There is a big difference between a mentor and a coach\n Mentoring is a long-term process based on mutual trust and respect.\n Coaching, on the other hand, is for a short period of time. The topmost priority of a mentor is to help develop skills that are not just relevant for the mentees in their present job, but also for the future. A mentor has the first-hand experience in the industry.'
       }
      ];
      const SingleCollapse = () => {
        const [openKey, setOpenKey] = useState(null);
    
        const toggle = (key) => {
          setOpenKey(openKey === key ? null : key);
        };
    
        return text.map((item, index) => (
          <div key={index} className="card mb-2">
            <div className="card-header" onClick={() => toggle(index)} style={{cursor:'pointer',color:'white',backgroundColor:'#3B8DBD'}}>
              {item.heading}
            </div>
            {openKey === index && (
              <div className="card-body">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ));
      };
    
      const MultipleCollapse = () => {
        const [openKeys, setOpenKeys] = useState([]);
    
        const toggle = (key) => {
          if (openKeys.includes(key)) {
            setOpenKeys(openKeys.filter((k) => k !== key));
          } else {
            setOpenKeys([...openKeys, key]);
          }
        };
    
        return text.map((item, index) => (
          <div key={index} className="card mb-2">
            <div className="card-header" onClick={() => toggle(index)} style={{cursor:'pointer',color:'white',backgroundColor:'#3B8DBD'}}>
              {item.heading}
            </div>
            {openKeys.includes(index) && (
              <div className="card-body">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ));
      };
    return(
        <div>
            <Header/>
            <div className='d-flex  min-vh-100' style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar/>
                <div className='p-3 w-100'>
                    <div className='d-flex justify-content-between'>
                        <h4>Collapse</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> Collapse</p>
                    </div>
                    <div className='p-3'>
                        <div className='shadow rounded bg-white'>
                            <div className='tabs-container'>
                                {
                                    tabs.map((tab,index)=>(
                                        <button key={index}
                                        className='btn'
                                        style={{
                                            backgroundColor: activeTab === tab ? 'white' : '#38b8db',
                                            color: activeTab === tab ? 'black' : 'white',
                                            borderTop: activeTab === tab ? '2px solid #38b8db' : 'none',
                                            padding: '8px',
                                            marginBottom: '5px',
                                            cursor: 'pointer',
                                            border: 'none'
                                        }}
                                        onClick={()=>onTabChange(tab)}>{tab}</button>
                                    ))
                                }
                                <hr/>
                            </div>
                            <div className='mt-3 p-3'>
                                {activeTab==='Single Collapse' && <SingleCollapse/>}
                                {activeTab==='Multiple Collapse' && <MultipleCollapse/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Collapse