import React from 'react'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import Profile from './screens/Profile/Profile'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Register}></Route>
            <Route exact path="/profile" component={Profile}></Route>
        </Router>
    )
}

export default App
