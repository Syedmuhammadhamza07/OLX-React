import { useNavigate } from "react-router-dom"
import heart from "../../Images/heart.png"
import './index.css'

function Cards ({post}) {
    const today = new Date();
    const hours = today.getHours()

    const navigate = useNavigate()
    console.log(post);


    return (
            <div onClick={()=> navigate(`/detail/${post.id}`)} className="Cards">
                <div className="thumbnail-div">
                    <img src={post.images[0]} className="thumbnail"/>
                </div>
                <div className="product-info-div">
                    <div className="price-div">
                        <h2 className="price-heading">{`Rs. ${post.amount}`}</h2>
                        <img src={heart} width={22}/>
                    </div>
                    <div className="title-div">
                        <h2 className="title-heading">{post.title}</h2>
                    </div>
                    <div className="user-info-div">
                        <div className="user-location-div">
                            <p className="location-text">{`${post.neighbourhood} , ${post.city}`}</p>
                        </div>
                        <div className="ad-post-time-div">
                            <p className="ad-post-time">{`${hours} hours ago`}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Cards;