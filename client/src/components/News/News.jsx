import React, {useState, useEffect} from 'react'
import './News.css'
import {MoreVert, ThumbUpAlt, ChatBubble, Share } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import axios from 'axios'

const News = ({post}) => {
    const [userData, setuserData] = useState()
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/posts/user/${post.userId}`).then((response)=>{
            setuserData(response.data)
        }).catch((e)=> console.log(e))
    }, [])  

    return (
        <>
( <div className="news_main_container">
                <div className="news_container">
                    <div className="top_news_container">
                        <div className="top_news_left_container">
                            <Link to={userData && `/profile/${userData._id}`}><img src={userData && userData.profilePicture} className="news_profile" alt="profile" /></Link>
                            <span className="news_user">{userData && userData.username}</span>
                            <span className="news_time">{post.createdAt}</span>
                        </div>
                            <MoreVert />
                    </div>
                    <div className="middle_news_container">
                        <span className="news_caption">{post.desc}</span>
                        <img src={`http://localhost:5000/post/${post.img}`} alt="" className="news_image" />
                    </div>
                    <div className="right_news_container">
                        <div className="like_container">
                            <div className="like_count_container">
                                <img src="/uploads/like.png" alt="" className="like" />
                                <span className="like_count" > {post.likes.length} pople like this</span>
                            </div>
                            <span className="comments">9 comments</span>
                        </div>
                        <hr/>
                        <div className="add_like_comment_container">
                            <span className="like_comment" ><ThumbUpAlt /></span>
                            <span className="like_comment"><ChatBubble htmlColor="grey"/></span>
                            <span className="like_comment"><Share htmlColor="darkgreen" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News
