import "./Header.css";
import image from  "../../assets/morning.jpg";

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img  className="headerimage" src={image} alt="" />
    </div>
  )
}
