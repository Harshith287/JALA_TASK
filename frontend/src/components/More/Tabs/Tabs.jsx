import { useState } from "react";
import Header from "../../../Header"
import Sidebar from "../../../Sidebar"
import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
const Tabs=()=>{
    const [isActive,setIsActive]=useState('tabs')
    const tabs=[{
        name:'tabs',
        heading:'Plan to Succeed',
        content:`Congratulations, You are in the best place to learn the technologies for JOB. Please strictly follow the plan for the first 45 days to see the unbelievable results.

You must UNLEARN to LEARN new things every day as technologies are changing faster than ever and Because the old rules will no longer apply...and so your old knowledge is.It's time for us to think beyond.

It's not just learning technologies, Also You learn how to use your knowledge and experience to get a job in less than 100 days.`,
    },{
        name:'unlearning',
        heading:'UnLearning',
        content:`Unlearning is the process of realizing that something which we learned earlier is incorrect, ineffective, or obsolete, admitting it and deciding to erase such bad conditioning and misconceptions from our mind for good. It is the process of exploring what we have stored in our system and deleting all the unnecessary data. It is the process of saying bye to an old, obsolete, and outdated paradigm and embracing a new paradigm and willingly undergoing a paradigm shift.

Unfortunately, we are controlled by myths which do not allow us to open our eyes to reality`
    },
    {
        name:'ways',
        heading:'Ways of Unlearning',
        content:`The first step towards becoming an “unlearned” is not just to have a thirst for knowledge but to question our knowledge. Discussing our knowledge with those who are competent in a particular field, being challenged constantly, and being ready to be proved wrong will help us understand whether what we have learned is still relevant or obsolete. It is also important to question one’s belief system and check whether we are treating myths as scientific facts.

The next important step is to take steps to develop creative and critical thinking.`
    }]
    const handleChange=(tabName)=>{
        setIsActive(tabName)
    }
    return(
        <div>
            <Header/>
            <div className="tabs-container app-container d-flex min-vh-100" style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar/>
                <div className="tab-container p-4 w-100">
                    <div className="d-flex justify-content-between ">
                        <h4>Tabs</h4>
                        <p><FaTachometerAlt/> Home <FaAngleRight/>  More <FaAngleRight/>  Tabs</p>
                    </div>
                    <div className="p-3 ">
                        <div className="multiple-tab-container  text-black shadow bg-white rounded">
                            <div className="tab-heading-container d-flex ">
                                {
                                    tabs.map((eachTab)=>(
                                        <button key={eachTab.name} 
                                        className="btn  tab-btn " 
                                        onClick={()=>handleChange(eachTab.name)}
                                        style={{
                                            backgroundColor: isActive === eachTab.name ? 'white' : '#38b8db',
                                            color: isActive === eachTab.name ? 'black' : 'white',
                                            borderTop: isActive === eachTab.name ? '2px solid #38b8db':'none'
                                          }}
                                        >{eachTab.heading}</button>
                                    ))
                                }
                                
                            </div>
                            <hr/>
                            <div className="tab-content p-3 ml-3">
                                {
                                    tabs.map((eachTab)=>{
                                        if(eachTab.name===isActive)
                                            return(
                                        <p style={{
                                            fontSize:'14px',
                                          }} key={eachTab.name}>{eachTab.content}</p>)
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tabs