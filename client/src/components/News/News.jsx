import React, {useState} from 'react'
import './News.css'
import {MoreVert, ThumbUpAlt, ChatBubble, Share } from '@material-ui/icons'
import {Users} from '../../dummyData'

const News = ({user}) => {
    const thisUser= Users.filter(x=> x.id === user.userId)
    const [likes, setlikes] = useState(user.like)
    const [testLiked, settestLiked] = useState(false)

    const onClickHandler=()=>{
        if(testLiked){
            setlikes(likes-1)
        }else{
            setlikes(likes+1)
        }
        settestLiked(!testLiked)
    }
    return (
        <>
            <div className="news_main_container">
                <div className="news_container">
                    <div className="top_news_container">
                        <div className="top_news_left_container">
                            <img src={thisUser[0].profilePicture} className="news_profile" alt="profile" />
                            <span className="news_user">{thisUser[0].username}</span>
                            <span className="news_time">{user.date}</span>
                        </div>
                            <MoreVert />
                    </div>
                    <div className="middle_news_container">
                        <span className="news_caption">{user.desc}</span>
                        <img src={user.image} alt="" className="news_image" />
                    </div>
                    <div className="right_news_container">
                        <div className="like_container">
                            <div className="like_count_container">
                                <img src="/uploads/like.png" alt="" className="like" />
                                <span className="like_count" > {likes} pople like this</span>
                            </div>
                            <span className="comments">{user.comment} comments</span>
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
