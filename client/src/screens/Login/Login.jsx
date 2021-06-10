import React, {useState, useEffect} from 'react'
import './Login.css'
import {userLoginAction} from '../../actions/userActions'
import {useDispatch, useSelector} from 'react-redux'

const Login=({history})=>{
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const userLoginDetails= useSelector(state=> state.userLoginDetails)
    const {loading, userDetails, error}= userLoginDetails;

    useEffect(() => {
        if(userDetails){
            console.log(userDetails)
            history.push('/')
        }
    })
    
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(userLoginAction(email, password))
    }
    return(
        <>
            {loading? (<h3>loading...</h3>): error? (<h3>{error}</h3>):(
                error? (<h3>{error}</h3>): (
                    <div className="login_main_container">
                    <div className="login_container">
                        <div className="left_section">
                            <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        </div>
                        <div className="right_container">
                            <form onSubmit={onSubmitHandler} className="form_container">
                                <input onChange={(e)=> setemail(e.target.value)} placeholder="Enter Email" type="text" className="login_input" />
                                <input onChange={(e)=> setpassword(e.target.value)} placeholder="Enter Password" type="password" className="login_input" />
                                <button type="submit" className="login_button">Sign Up</button>
                                <hr className="hr"/>
                                <button className="createaccount">
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                )
            )}
        </>
    )
}

export default Login