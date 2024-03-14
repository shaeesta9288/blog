import "./singlepost.css";
import island from '../../assets/island.jpg'

export default function SinglePost() {
  return (
    <div className="singlePost">
    <div className="singlePostWrapper">
        <img src={island} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum 
          saepe sed accusamus!
          <div className="singlePostEdit">
          <i className=" singlePostIcon fa-light fa-pen-to-square"></i>
          <i className="singlePostIcon fa-regular fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Shaeesta</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         A quod aliquid explicabo facere tempore voluptas doloribus temporibus
         cum sit itaque reprehenderit, alias, cumque sequi officia amet laudantium 
         impedit autem? Accusamus, quod ex consequatur inventore nisi voluptatum 
         neque excepturi repellat nam ad unde sequi eaque ipsum mollitia dicta minima
         earum voluptatibus!
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         A quod aliquid explicabo facere tempore voluptas doloribus temporibus
         cum sit itaque reprehenderit, alias, cumque sequi officia amet laudantium 
         impedit autem? Accusamus, quod ex consequatur inventore nisi voluptatum 
         neque excepturi repellat nam ad unde sequi eaque ipsum mollitia dicta minima
         earum voluptatibus!
        </p>
    </div>
    </div>
  )
}
