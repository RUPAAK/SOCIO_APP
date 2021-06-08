import React from 'react'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Register}></Route>
        </Router>
    )
}

export default App
