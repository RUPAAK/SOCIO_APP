import React from 'react'
import './Friends.css'

const Friends = ({friend}) => {
    return (
        <>
            <li key={friend.id} className="sidebarFriendItem">
                <img src={friend.profilePicture} alt="friend.username" className="sidebarFriendProfile" />
                <span className="sidebarFriendName">{friend.username}</span>
            </li>
        </>
    )
}

export default Friends
