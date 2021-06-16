import Navbar from '../../components/Navbar/Navbar'
import React, {useState, useEffect} from 'react'
import './Profile.css'
import Post from '../../components/Post/Post'
import News from '../../components/News/News'
import {userPersonalPosts} from '../../actions/userActions'
import {useDispatch, useSelector} from 'react-redux'
import { Users} from '../../dummyData'
import axios from 'axios'

const Profile = ({match}) => {
    const [profile, setprofile] = useState('')
    const dispatch = useDispatch()
        
    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/profile/${match.params.id}`).then((response)=>{
            console.log(response.data)
            setprofile(response.data)
    })

        dispatch(userPersonalPosts(match.params.id))
    }, [])

    const userLoginDetails= useSelector(state=> state.userLoginDetails)
    const {userDetails }= userLoginDetails

    const userPosts= useSelector(state=> state.userPosts)
    const {posts, user}= userPosts

    return (
        <>
            <div className="main_profile_container">
                <Navbar />
                <div className="profile_container">
                    <div className="top-container">
                        <div className="img-container">
                            <img src={profile.coverPicture} alt="" className="cover" />
                            <div className="frame"></div>
                        </div>
                        <div className="details">
                            <img src={profile.profilePicture} alt="" className="profile" />
                            <p className="username">{profile.username}</p>
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
                                    {posts.posts.length == 0? (<h1>NO POSTS</h1>): (
                                        posts.posts.map((post, index)=> <News key={index} post={post} user={posts.user}/>)
                                    )}
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
