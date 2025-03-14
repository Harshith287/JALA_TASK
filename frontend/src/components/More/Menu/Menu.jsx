import Header from "../../../Header";
import Sidebar from '../../../Sidebar';
import { FaAngleRight, FaTachometerAlt } from 'react-icons/fa';
import { useState } from "react";

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState('Single Menus');
    const [click, setOnClick] = useState();
    const [hoveredMenu, setHoveredMenu] = useState(null); 

    const menus = ['Testing', 'Java', '.Net', 'Data Base'];

    const submenus = [
        {
            name: 'Testing',
            subnames: ['Selenium', 'Manual Testing', 'DB Testing', 'Unit Testing']
        },
        {
            name: 'Java',
            subnames: ['Adv Java', 'Core Java', 'Spring', 'Hibernate']
        },
        {
            name: '.Net',
            subnames: ['C#', 'ASP.NET', 'ADO.NET', 'MVC']
        },
        {
            name: 'Data Base',
            subnames: ['SQL', 'My sql', 'Oracle', 'H2']
        }
    ];

    const onMenuClick = (menu) => {
        setOnClick(menu);
    };

    const renderSingleMenu = () => {
        return (
            <div className="d-flex justify-content">
                <div className="d-flex flex-column">
                    {menus.map((menu, index) => (
                        <button
                            key={index}
                            onClick={() => onMenuClick(menu)}
                            style={{
                                backgroundColor: '#38b8db',
                                color: 'white',
                                padding: '10px',
                                cursor: 'pointer',
                                marginRight: '10px',
                                width: '150px',
                                border: 'none',
                                borderBottom: '1px solid black'
                            }}
                        >
                            {menu}
                        </button>
                    ))}
                </div>
                {click && <p>You have selected {click} menu option</p>}
            </div>
        );
    };

    const renderSubMenus = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {submenus.map((submenu, index) => (
                    <div key={index} 
                        onMouseEnter={() => setHoveredMenu(submenu.name)} 
                        onMouseLeave={() => setHoveredMenu(null)} 
                    >
                        <h6 style={{backgroundColor:'#38b8db',color:'white',width:'150px',padding:'10px',cursor:'pointer'}}>{submenu.name}</h6>
                        {hoveredMenu === submenu.name && (
                            <div>
                                {submenu.subnames.map((subname, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => onMenuClick(subname)}
                                        style={{
                                            backgroundColor: activeMenu === subname ? 'white' : '#38b8db',
                                            color: activeMenu === subname ? 'black' : 'white',
                                            borderTop: activeMenu === subname ? '2px solid #38b8db' : 'none',
                                            padding: '8px',
                                            marginBottom: '5px',
                                            cursor: 'pointer',
                                            border: 'none'
                                        }}
                                    >
                                        {subname}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                {click && <p>You have selected {click} menu option</p>}
            </div>
        );
    };

    return (
        <div>
            <Header />
            <div className="menuContainer d-flex w-100 min-vh-100" style={{ backgroundColor: '#ECEFF1'}}>
                <Sidebar />
                <div className="menuContainer p-4 w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Menu</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> Menu</p>
                    </div>
                    <div className="p-3">
                        <div className="menu-main-container shadow bg-white rounded">
                            <div className="menu-tab-container">
                                <button
                                    className="btn"
                                    onClick={() => setActiveMenu('Single Menus')}
                                    style={{
                                        backgroundColor: activeMenu === 'Single Menus' ? 'white' : '#38b8db',
                                        color: activeMenu === 'Single Menus' ? 'black' : 'white',
                                        borderTop: activeMenu === 'Single Menus' ? '2px solid #38b8db' : 'none',
                                        padding: '10px',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Single Menus
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => setActiveMenu('Sub Menus')}
                                    style={{
                                        backgroundColor: activeMenu === 'Sub Menus' ? 'white' : '#38b8db',
                                        color: activeMenu === 'Sub Menus' ? 'black' : 'white',
                                        borderTop: activeMenu === 'Sub Menus' ? '2px solid #38b8db' : 'none',
                                        padding: '10px',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Sub Menus
                                </button>
                            </div>
                            <hr />
                            <div className="menu-content-container p-3">
                                {activeMenu === 'Single Menus' && renderSingleMenu()}
                                {activeMenu === 'Sub Menus' && renderSubMenus()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
