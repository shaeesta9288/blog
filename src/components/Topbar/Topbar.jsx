import './Topbar.css';
import image from "./checkmark.png";
import { Link } from 'react-router-dom';

export default function Topbar() {
  const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className=" top-icon fa-brands fa-facebook"></i>
        <i className=" top-icon fa-brands fa-twitter"></i>
        <i className=" top-icon fa-brands fa-instagram"></i>
        <i className=" top-icon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="topCenter">
        <ul className="topList">
            <li className='topListItem'>
              <Link to="/" style={{textDecoration:"none", color: "inherit"}}>Home</Link>
            </li>
            <li className='topListItem'>
            <Link to="/about" style={{textDecoration:"none", color: "inherit"}}>About</Link>
            </li>
            <li className='topListItem'>
            <Link to="/contact" style={{textDecoration:"none", color: "inherit"}}>Contact</Link>
            </li>
            <li className='topListItem'>
            <Link to="/write" style={{textDecoration:"none", color: "inherit"}}>Write</Link>
            </li>
            <li className='topListItem'>{user && "Logout"}</li>
        </ul>
        </div>
        <div className="topRight">
        {
          user ? (
            <img className="topImage"   src={image} alt="pic" />
          ) : (
            <ul className='topList'>
            <li className='topListItem'>
            <Link to="/login">Login</Link>
            </li>
            <li className='topListItem'>
            <Link to="/register">Register</Link>
            </li>
            
            </ul>
            
          )
        }
           
            <i className=" search-icon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
