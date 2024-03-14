import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import kelli from "../../assets/kelli.jpg";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form  className="settingsForm">
          <label >Profile Picture</label>
          <div className="settingsPP">
            <img src={kelli} alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="safak" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
