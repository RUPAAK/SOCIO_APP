import Navbar from '../../components/Navbar/Navbar'
import React, { useState, useEffect } from 'react'
import './Profile.css'
import Post from '../../components/Post/Post'
import News from '../../components/News/News'
import { userPersonalPosts } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Profile = ({ match, }) => {
    const [profile, setprofile] = useState('')
    const [changeProfile, setchangeProfile] = useState('')
    const [changeCover, setchangeCover] = useState('')
    const [addFriend, setaddFriend] = useState()
    const [checkFriend, setcheckFriend] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        {checkFriend? setaddFriend("Remove Friend") : setaddFriend("Add Friend")}
        
        axios.get(`http://localhost:5000/api/users/profile/${match.params.id}`).then((response) => {
            setprofile(response.data)
        })

        dispatch(userPersonalPosts(match.params.id))
    }, [dispatch, match.params.id])

    const userLoginDetails = useSelector(state => state.userLoginDetails)
    const { userDetails } = userLoginDetails

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts

    const submitProfileHandler = async (e) => {
        e.preventDefault()
        if (changeProfile.length === 0) {
            alert('No Profile Choosen')

        } else {
            const formData = new FormData()
            formData.append('profile', changeProfile)
            await axios.put(`http://localhost:5000/api/users/profile/${userDetails._id}/profile`, formData)
            window.location.reload()

        }
    }
    const submitCoverHandler = async (e) => {
        e.preventDefault()
        if (changeCover.length === 0) {
            alert('No Cover Choosen')

        } else {
            const formData = new FormData()
            formData.append('cover', changeCover)
            await axios.put(`http://localhost:5000/api/users/profile/${userDetails._id}/cover`, formData)
            window.location.reload()
        }
    }

    const addFriendHandler=async()=>{
        await axios.put(`http://localhost:5000/api/users/${match.params.id}/follow`, {userId: userDetails._id})
    }

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
                            <div className="username">
                                <p className="nameAddText">{profile.username}</p>
                                {userDetails._id === match.params.id? '': <button onClick={addFriendHandler} className="nameAddText">{addFriend}</button>}
                                <hr />
                                <div>
                                    {userDetails._id === match.params.id ? (
                                        <div>
                                            <form onSubmit={submitProfileHandler}>
                                                <label for="profile">PROFILE</label>
                                                <input onChange={(e) => setchangeProfile(e.target.files[0])} style={{ display: 'none' }} type="file" name="profile" id="profile" />
                                                <button type="submit">C.PROFILE</button>
                                            </form>
                                            <form onSubmit={submitCoverHandler}>
                                                <label for="cover">COVER</label>
                                                <input onChange={(e) => setchangeCover(e.target.files[0])} style={{ display: 'none' }} type="file" name="cover" id="cover" />
                                                <button type="submit">C.COVER</button>
                                            </form>
                                        </div>
                                    ) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feed_main_container">
                        <div className="feed_container">
                            <div className="friends_section">
                                <p>FRIENDS</p>
                                <div className="friends">
                                    {profile && profile.friends.map(user => {
                                        return (
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
                                    <Post />
                                </div>
                                <div className="mypost_section">
                                    {posts.posts.length === 0 ? (<h1>NO POSTS</h1>) : (
                                        posts.posts.reverse().map((post, index) => <News key={index} post={post} user={posts.user} />)
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
