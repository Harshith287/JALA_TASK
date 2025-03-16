import { useState } from 'react';
import Header from '../../../Header'
import Sidebar from '../../../Sidebar'
import { FaAngleRight } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";
import { Autocomplete, TextField} from '@mui/material';
const AutoComplete=()=>{
    const [activeTab,setActiveTab]=useState('Single Values')
    const [singleValue, setSingleValue] = useState('');
    const [multipleValues, setMultipleValues] = useState([]);
    const tabs=['Single Values','Multiple Values']
    const onTabClick=(tab)=>{
        setActiveTab(tab)
    }
    const availableTags = [
        "ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy",
        "Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"
      ];
    const renderSingle=()=>{
        return(
            <div className='mt-3 p-5'>
                <Autocomplete 
                options={availableTags}
                value={singleValue}
                onChange={(e,val)=>setSingleValue(val)}
                renderInput={(params) => <TextField {...params} label="Single Tag" />}
                />
            </div>
        )
    }
    
    const renderMultiple=()=>{
        return(
            <div className='mt-3 p-5'>
                <Autocomplete 
                multiple
                options={availableTags}
                value={multipleValues}
                onChange={(event, newValue) => setMultipleValues(newValue)}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Multiple Tags "
                    />
                )}
                />
            </div>
        )
    }
    return(
        <div className='w-100 '>
            <Header/>
            <div className='w-100 d-flex min-vh-100 ' style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar/>
                <div className='p-3 w-100'>
                    <div className='d-flex justify-content-between'>
                        <h4>Auto Complete</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> Auto Complete</p>
                    </div>
                    <div className='p-3'>
                        <div className='shadow rounded bg-white'>
                            <div className='tabs-container'>
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
                                            cursor: 'pointer',
                                        }}
                                        onClick={()=>onTabClick(tab)}>
                                            {tab}
                                        </button>
                                    ))
                                }
                                <hr/>
                            </div>
                            <div className='content-container'>
                                {activeTab==='Single Values' && renderSingle()}
                                {activeTab==='Multiple Values' && renderMultiple()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AutoComplete

