import React, {useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import News from '../../components/News/News'
import {useDispatch, useSelector} from 'react-redux'
import './Feed.css'
import axios from 'axios'

const Feed = () => {
    const [allPosts, setallPosts] = useState([])
    const dispatch = useDispatch()
    const userLoginDetails= useSelector(state=> state.userLoginDetails)
    const {userDetails}= userLoginDetails
    useEffect(()=>{
        axios.post('http://localhost:5000/api/posts/timeline/allposts', {userId: `${userDetails._id}`}).then((response)=>{
            setallPosts(response.data)
        })
    }, [])
    return (
        <div className="feed_main_container">
            <div className="feed_wrapper">
                <Post />
                {allPosts.map((post, index)=> <News key={index} post={post} />)}
            </div>
        </div>
    )
}

export default Feed
