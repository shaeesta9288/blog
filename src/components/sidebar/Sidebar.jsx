import './sidebar.css';
import yong from "../../assets/about.jpg";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img width={250} src={yong} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum odit maiores earum suscipit qui magnam voluptate quia nemo. Placeat iure nam delectus asperiores tenetur sunt cumque nobis soluta eius velit. 
            blanditiis magnam sed ipsa pariatur!
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarListItem'>
              <li className='sidebarListItem'>Life</li>
              <li className='sidebarListItem'>Music</li>
              <li className='sidebarListItem'>Style</li>
              <li className='sidebarListItem'>Sport</li>
              <li className='sidebarListItem'>Tech</li>
              <li className='sidebarListItem'>Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className=" sidebar-icon fa-brands fa-facebook"></i>
        <i className=" sidebar-icon fa-brands fa-twitter"></i>
        <i className=" sidebar-icon fa-brands fa-instagram"></i>
        <i className=" sidebar-icon fa-brands fa-square-pinterest"></i>
        
        </div>
        </div>
    </div>
  )
}
