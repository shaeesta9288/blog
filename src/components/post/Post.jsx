import "./Post.css";
import nature from "../../assets/nature.jpg";

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" src={nature} alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium rem nam perferendis iste eius, quidem quaerat atque aspernatur aliquid eos.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Eligendi impedit nesciunt
     tempora animi ipsam, explicabo quas minus expedita 
     laudantium sit.
     Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Eligendi impedit nesciunt
     tempora animi ipsam, explicabo quas minus expedita 
     laudantium sit
     Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Eligendi impedit nesciunt
     tempora animi ipsam, explicabo quas minus expedita 
     laudantium sit.</p>
    </div>
  )
}
