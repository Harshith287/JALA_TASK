import  './Sidebar.css'
import { FaUserCircle } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUsers, FaAngleDown, FaAngleLeft, FaEdit, FaSearch } from "react-icons/fa";
import { CgChevronDoubleRight, CgChevronDoubleRightR, CgDetailsMore } from "react-icons/cg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Menu=()=>{
    const [employeeOpen, setEmployeeOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  

    return(
        <div className=" menu-container  text-white ">
            <div className="profile-container d-flex mt-2">
            <FaUserCircle size={50} />
            <h6 className='user'>Guest User</h6>
            </div>
            <div className='p-2'>
    <ul className="menu ">
        <Link to='/home' className='text-decoration-none'>
        <li className="menu-item">
          <FaTachometerAlt/> Home
        </li>
        </Link>
        <li className="menu-item" onClick={() => setEmployeeOpen(!employeeOpen)}>
          <FaUsers/> Employee
          <span className="arrow">{employeeOpen ? <FaAngleDown/> : <FaAngleLeft/>}</span>
        </li>
        {employeeOpen && (
          <ul className="submenu">
            <Link to='/employee/create'  className='text-decoration-none'>
                <li className="menu-item"><FaEdit/> Create</li>
            </Link>
            <Link to='/employee/search'  className='text-decoration-none'>
            <li className="menu-item"><FaSearch/> Search</li>
            </Link>
          </ul>
        )}
        <li className="menu-item" onClick={() => setMoreOpen(!moreOpen)}>
          <CgDetailsMore/> More
          <span className="arrow">{moreOpen ? <FaAngleDown/> : <FaAngleLeft/>}</span>
        </li>
        {moreOpen && (
          <ul className="submenu">
            <Link to='/home/tabs'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> Multiple Tabs</li>
            </Link>
            <Link to='/home/menu'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> Menu</li>
            </Link>
            <Link to='/home/autocomplete'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> Auto Complete</li>
            </Link>
            <Link to='/home/collapse'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> Collapse</li>
            </Link>
            <Link to='/home/images'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> Images</li>
            </Link>
            <Link to='/home/slider'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> Slider</li>
            </Link>
            <Link to='/home/tooltips'  className='text-decoration-none'>
                <li className="menu-item"><CgChevronDoubleRight/> Tooltips</li>
            </Link>
            <Link to='/home/popups'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> Popups</li>
            </Link>
            <Link to='/home/links'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> Links</li>
            </Link>
            <Link to='/home/Cssproperties'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> CSS Properties</li>
            </Link>
            <Link to='/home/frames'  className='text-decoration-none'>
              <li className="menu-item"><CgChevronDoubleRight/> iFrames</li>
            </Link>
          </ul>
        )}
      </ul>
      </div>
        </div>
    )
}
export default Menu


