import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import Rightbar from '../../components/Rightbar/Rightbar'

import  './HomeScreen.css'

const HomeScreen = () => {
    return (
       <>
        <Navbar />
        <div className="home_container">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
       </>
    )
}

export default HomeScreen
