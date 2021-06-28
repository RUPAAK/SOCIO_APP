import {
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL,
    USER_POST_REQUEST, USER_POST_SUCCESS, USER_POST_FAIL,
    // USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL
} from '../constants/userConstants'
import axios from 'axios'

export const userLoginAction= (email, password)=>async(dispatch)=>{
    try {
        dispatch({type: USER_LOGIN_REQUEST})
        const {data}= await axios.post('http://localhost:5000/api/users/login', {email, password})
        console.log(data)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
                await localStorage.setItem('userDetails', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message? error.response.data.message : error.response
        })
    }
}

export const userLogoutAction=()=> async(dispatch)=>{
    localStorage.removeItem('userDetails')
    dispatch({type: USER_LOGOUT})
}

export const userRegisterAction= (username, email, password)=>async(dispatch)=>{
    try {
        dispatch({type: USER_REGISTER_REQUEST})
        const {data}= await axios.post('http://localhost:5000/api/users/register', {username, email, password})
        console.log(data)
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        await localStorage.setItem('userDetails', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message? error.response.data.message : error.response
        })
    }
}

export const userPersonalPosts= (id)=>async (dispatch)=>{
    try {
        console.log('action')
        dispatch({type: USER_POST_REQUEST})
        const {data}= await axios.get(`http://localhost:5000/api/posts/userPosts/${id}`)
        dispatch({
            type: USER_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_POST_FAIL,
            payload: error.response && error.response.data.message? error.response.data.message: error.message
        })
    }
}
