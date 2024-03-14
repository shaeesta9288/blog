import Header from "../../components/Header/Header";
import Post from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
        
       <Post/>
       <Sidebar/>
    </div>
    </>
  )
}
