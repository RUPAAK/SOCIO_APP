import React from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import Post from '../../components/Post/Post'
import News from '../../components/News/News'
import { Users, Posts } from '../../dummyData'

const Profile = () => {
    return (
        <>
            <div className="main_profile_container">
                <Navbar />
                <div className="profile_container">
                    <div className="top-container">
                        <div className="img-container">
                            <img src="/uploads/posts/a.jpeg" alt="" className="cover" />
                            <div className="frame"></div>
                        </div>
                        <div className="details">
                            <img src="/uploads/posts/a.jpeg" alt="" className="profile" />
                            <p className="username">RUPAK THAPA MAGAR</p>
                        </div>
                    </div>
                    <div className="feed_main_container">
                        <div className="feed_container">
                            <div className="friends_section">
                                <p>FRIENDS</p>
                                <div className="friends">
                                {Users.map(user=>{
                                    return(
                                        <>
                                            <span className="friend">
                                                <img className="friend_pp" src={user.profilePicture} alt="" />
                                            </span>
                                        </>
                                    )
                                })}
                                </div>
                            </div>
                            <div className="feed_section">
                                <div className="post_section">
                                    <Post/>
                                </div>
                                <div className="mypost_section">
                                {Posts.map(user=> <News key={user.id} user={user} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
