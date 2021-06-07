import React from 'react'
import {Home, Person, ExitToApp} from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="main_nav_container">
               <div className="left_section">
                    <img src="/uploads/a.jpeg" alt="" className="navbar_profile" />
                    <input placeholder="Search..." className="search" />
               </div>
               <div className="middle_section">
                    <div className="icon_container">
                        <div className="icons_list">
                            <Tooltip title={<h3>HOME</h3>}><Home className="icon" /></Tooltip>
                        </div>
                        <div className="icons_list">
                        <Tooltip title={<h3>PROFILE</h3>}><Person className="icon" /></Tooltip>
                            
                        </div>
                    </div>
               </div>
               <div className="right_section">
                    <div className="logout_container">
                        <Tooltip title={<h3>LOGOUT</h3>}><ExitToApp className="logout" /></Tooltip>
                    </div>
               </div>
            </nav>
        </>
    )
}

export default Navbar
