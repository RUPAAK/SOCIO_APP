import React from 'react'
import { Home, Person, ExitToApp } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import { userLogoutAction } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useHistory } from "react-router-dom";


const Navbar = ({}) => {
    let history = useHistory();
    const dispatch = useDispatch()
    const userLoginDetails = useSelector(state => state.userLoginDetails)
    const { error, userDetails, loading } = userLoginDetails

    const onClickHandler = (e) => {
        dispatch(userLogoutAction())
        history.push('/')
    }
    return (
        <>
            <nav className="main_nav_container">
                <div className="left_section">
                    <img src="/uploads/a.jpeg" alt="" className="navbar_profile" />
                    <input placeholder="Search..." className="search" />
                </div>
                <div className="middle_section">
                    <div className="icon_container">
                        <Link to="/">
                            <div className="icons_list">
                                <Tooltip title={<h3>HOME</h3>}><Home className="icon" /></Tooltip>
                            </div>
                        </Link>
                        <Link to={userDetails? `profile/${userDetails._id}`: '/'}>
                            <div className="icons_list">
                                <Tooltip title={<h3>PROFILE</h3>}><Person className="icon" /></Tooltip>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="right_section">
                    <div className="logout_container">
                        <Tooltip title={<h3>LOGOUT</h3>}><ExitToApp onClick={onClickHandler} className="logout" /></Tooltip>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
