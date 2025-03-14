import { HiOutlineLogout } from "react-icons/hi";
import './Header.css'
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/')
    }
    return(
        <div className="header ">
            <h2 className="magnus ">Magnus</h2>
            <button className="btn " onClick={handleLogout}>
            <HiOutlineLogout />
            Logout
            </button>
        </div>
    )
}
export default Header