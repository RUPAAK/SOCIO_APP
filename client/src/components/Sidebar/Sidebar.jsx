import React from 'react'
import "./Sidebar.css"
import { Person, People, Work, Videocam, Chat, ArrowDownward } from '@material-ui/icons'
import { Users } from '../../dummyData'
import Friends from '../Friends/Friends'

const Sidebar = () => {
    return (
        <div className="sidebar_main_container">
            <div className="sidebar_wrapper">
                <ul className="sidebarlist">
                    <li className="sidebarItem">
                        <Person className="icons" />
                        <span className="icon_text">Profile</span>
                    </li>
                    <li className="sidebarItem">
                        <People className="icons" />
                        <span className="icon_text">Friends</span>
                    </li>
                    <li className="sidebarItem">
                        <Work className="icons" />
                        <span className="icon_text">Jobs</span>
                    </li>
                    <li className="sidebarItem">
                        <Videocam className="icons" />
                        <span className="icon_text">Videos</span>
                    </li>
                    <li className="sidebarItem">
                        <Chat className="icons" />
                        <span className="icon_text">Chat</span>
                    </li>
                    <li className="sidebarItem">
                        <ArrowDownward className="icons showMoreIcon" />
                        <span className="icon_text">Show More</span>
                    </li>
                </ul>
                <hr className="sidebarHr" />

                <ul className="sidebarFriendList">
                    {Users.map((friend) => <Friends friend={friend} />)}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
