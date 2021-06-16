import React, {useState, useEffect} from 'react'
import './News.css'
import {MoreVert, ThumbUpAlt, ChatBubble, Share } from '@material-ui/icons'
import {Users} from '../../dummyData'

const News = ({post, user}) => {
    // const [likes, setlikes] = useState(like)
    // const [testLiked, settestLiked] = useState(false)
    console.log(post.createdAt.split(''))
    // useEffect(() => {
    //     dispatch
    // }, [input])

    const onClickHandler=()=>{
        // if(testLiked){
        //     setlikes(likes-1)
        // }else{
        //     setlikes(likes+1)
        // }
        // settestLiked(!testLiked)
    }
    return (
        <>
            <div className="news_main_container">
                <div className="news_container">
                    <div className="top_news_container">
                        <div className="top_news_left_container">
                            <img src={user.profilePicture} className="news_profile" alt="profile" />
                            <span className="news_user">{user.username}</span>
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
                            <span className="like_comment" onClick={onClickHandler}  ><ThumbUpAlt /></span>
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
