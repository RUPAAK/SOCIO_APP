import React from 'react'
import Post from '../../components/Post/Post'
import News from '../../components/News/News'
import './Feed.css'

const Feed = () => {
    return (
        <div className="feed_main_container">
            <div className="feed_wrapper">
                <Post />
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
            </div>
        </div>
    )
}

export default Feed
