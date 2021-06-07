import React from 'react'
import Post from '../../components/Post/Post'
import './Feed.css'

const Feed = () => {
    return (
        <div className="feed_main_container">
            <div className="feed_wrapper">
                <Post />
            </div>
        </div>
    )
}

export default Feed
