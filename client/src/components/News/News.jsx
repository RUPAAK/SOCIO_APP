import React, { useState, useEffect } from 'react'
import './News.css'
import { MoreVert, ThumbUpAlt, ChatBubble, Share } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const News = ({ post }) => {
    const [userData, setuserData] = useState()
    const [likeCount, setlikeCount] = useState(post.likes.length)
    const [allComment, setallComment] = useState(false)
    const [allPostedComment, setallPostedComment] = useState([])
    const [showCmtBox, setshowCmtBox] = useState(false)
    const [comment, setcomment] = useState('')
    const [likeBoolen, setlikeBoolen] = useState(false)
    const userLoginDetails = useSelector(state => state.userLoginDetails)
    const { userDetails } = userLoginDetails

    useEffect(() => {
        setlikeBoolen(post.likes.includes(userDetails._id))
    }, [userDetails._id, post.likes])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts/user/${post.userId}`).then((response) => {
            setuserData(response.data)
        }).catch((e) => console.log(e))
    }, [post.likes, post.userId])

    const addCommentHandler = async (postId) => {
        await axios.put(`http://localhost:5000/api/posts/${postId}/commentpost`, { cmt: comment, userId: userDetails._id })
        setcomment('')
    }

    const likeHandler = async () => {
        await axios.put(`http://localhost:5000/api/posts/${post._id}/like`, { userId: userDetails._id })
        setlikeCount(likeBoolen ? likeCount - 1 : likeCount + 1)
        setlikeBoolen(!likeBoolen)
    }
    const showCommentBox = () => {
        setshowCmtBox(!showCmtBox)
    }

    const showPostedComment=()=>{
        axios.get(`http://localhost:5000/api/posts/${post._id}/postcomment`).then((response)=>{
            console.log(response.data)
            setallPostedComment(response.data)
        })
        setallComment(!allComment)
    }

    return (
        <>
            <div className="news_main_container">
                <div className="news_container">
                    <div className="top_news_container">
                        <div className="top_news_left_container">
                            <Link to={`/profile/${userData?._id}`}><img src={userData && userData.profilePicture} className="news_profile" alt="profile" /></Link>
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
                                <span className="like_count" > {likeCount} pople like this</span>
                            </div>
                            <span className="comments" onClick={showPostedComment} >{post.comment.length} comments</span>
                        </div>
                        <hr />
                        <div className="add_like_comment_container">
                            <span className="like_comment" ><ThumbUpAlt onClick={likeHandler} /></span>
                            <span className="like_comment"><ChatBubble onClick={showCommentBox} htmlColor="grey" /></span>
                            <span className="like_comment"><Share htmlColor="darkgreen" /></span>
                        </div>
                        {allComment ? (
                            <div className="allComment_container">
                                <div className="allComment_sub_container">
                                    {allPostedComment.map(eachOneComment=> {
                                        return(
                                            <>
                                                <div className="each_comment">
                                                    <img className="comment_profile" src={eachOneComment.userId.profilePicture} alt="Pic" />
                                                    <div className="cmt_info">
                                                        <p className="cmt_user">({eachOneComment.userId.username}) says..</p>
                                                        <p classname="cmt">{eachOneComment.cmt}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}

                                </div>
                            </div>
                        ) : ""}
                        {showCmtBox ? (
                            <div className="comment_container">
                                <div className="comment_sub_container">
                                    <input onChange={(e) => setcomment(e.target.value)} value={comment} type="text" className="comment" placeholder="Add Comment" />
                                    <button onClick={() => addCommentHandler(post._id)} className="addComent">Add</button>
                                </div>
                            </div>
                        ) : ''}

                    </div>
                </div>
            </div>
        </>
    )
}

export default News
