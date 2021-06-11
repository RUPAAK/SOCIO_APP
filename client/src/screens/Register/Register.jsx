import React, { useState, useEffect } from 'react'
import { userRegisterAction } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = ({ history }) => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")

    const userRegisterDetails = useSelector(state => state.userRegisterDetails)
    const { loading, userDetails, success, error } = userRegisterDetails
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (password === confirmpassword) {
            dispatch(userRegisterAction(username, email, password))
        } else {
            alert('Password Not Matching')
        }
    }
    return (
        <>
            <div className="register_main_container">
                <div className="register_container">
                    <div className="left_section">
                        <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                    <div className="right_container">
                        <form onSubmit={onSubmitHandler} className="form_container">
                            {userDetails? (<h3>Register Successfull</h3>): error? (<h3>{error}</h3>): ''}
                            <input onChange={(e) => setusername(e.target.value)} placeholder="Enter Username" type="text" className="register_input" />
                            <input onChange={(e) => setemail(e.target.value)} placeholder="Enter Email" type="email" className="register_input" />
                            <input onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" type="password" className="register_input" />
                            <input onChange={(e) => setconfirmpassword(e.target.value)} placeholder="Enter Confirm Password" type="password" className="register_input" />
                            <button type="submit" className="register_button">Sign Up</button>
                            <hr className="hr" />
                            <Link className="loginaccount" to="/login">
                                    Log In
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register