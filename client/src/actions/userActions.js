import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from '../constants/userConstants'
import axios from 'axios'

export const userLoginAction= (email, password)=>async(dispatch)=>{
    try {
        dispatch({type: USER_LOGIN_REQUEST})
        console.log(email)
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
            payload: error.response && error.response.data.messge? error.resposne.data.message : error.response
        })
    }
}