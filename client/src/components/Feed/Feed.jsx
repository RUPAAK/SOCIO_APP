import React from 'react'
import Post from '../../components/Post/Post'
import News from '../../components/News/News'
import {Posts} from '../../dummyData'
import './Feed.css'

const Feed = () => {
    return (
        <div className="feed_main_container">
            <div className="feed_wrapper">
                <Post />
                {Posts.map(user=> <News key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default Feed
