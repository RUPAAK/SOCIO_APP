import React from 'react'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import Profile from './screens/Profile/Profile'
import Nourl from './screens/Nourl/Nourl'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={HomeScreen}></Route>
            <Route exact path="/signup" component={Register}></Route>
            <Route exact path="/profile/:id" component={Profile}></Route>
            <Route path="/profile/profile/:id?" component={Nourl}></Route>
        </Router>
    )
}

export default App
