import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useDispatch, useSelector} from 'react-redux'

import  './HomeScreen.css'

const HomeScreen = ({history}) => {
    const userLoginDetails= useSelector(state=> state.userLoginDetails)
    const {loading, userDetails, error}= userLoginDetails;
    useEffect(()=>{
        if(!userDetails){
            history.push('/')
        }
    })
    return (
       <>
        <Navbar />
        <div className="home_container">
            <Sidebar/>
            <Feed/>
        </div>
       </>
    )
}

export default HomeScreen
