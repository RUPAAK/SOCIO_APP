import React from 'react'
import './Friends.css'
import { Link } from 'react-router-dom'

const Friends = ({ friend }) => {
    return (
        <>
            <Link to={`/profile/${friend._id}`}>
                <li key={friend.id} className="sidebarFriendItem">
                    <img src={friend.profilePicture} alt="friend.username" className="sidebarFriendProfile" />
                    <span className="sidebarFriendName">{friend.username}</span>
                </li>
            </Link>
        </>
    )
}

export default Friends
