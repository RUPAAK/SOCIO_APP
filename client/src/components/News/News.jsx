import React from 'react'
import './News.css'
import {MoreVert, ThumbUpAlt, ChatBubble, Share } from '@material-ui/icons'

const News = () => {
    return (
        <>
            <div className="news_main_container">
                <div className="news_container">
                    <div className="top_news_container">
                        <div className="top_news_left_container">
                            <img src="/uploads/d.jpg" className="news_profile" alt="profile" />
                            <span className="news_user">Rupak Thapa Magar</span>
                            <span className="news_time">5 days ago</span>
                        </div>
                            <MoreVert />
                    </div>
                    <div className="middle_news_container">
                        <span className="news_caption">Lhello all</span>
                        <img src="/uploads/post.jpg" alt="" className="news_image" />
                    </div>
                    <div className="right_news_container">
                        <div className="like_container">
                            <div className="like_count_container">
                                <img src="/uploads/like.png" alt="" className="like" />
                                <img src="/uploads/haha.png" alt="" className="like" />
                                <span className="like_count">25 people likes it</span>
                            </div>
                            <span className="comments">9 comments</span>
                        </div>
                        <hr/>
                        <div className="add_like_comment_container">
                            <span className="like_comment"><ThumbUpAlt htmlColor="blue" /></span>
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
