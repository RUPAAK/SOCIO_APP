import {
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL,
    USER_POST_REQUEST, USER_POST_SUCCESS, USER_POST_FAIL,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true}
        case USER_LOGIN_SUCCESS:
            return { loading: false, userDetails: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}

export const userRegisterReducer= (state={}, action)=>{
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {loading: false, userDetails: action.payload}
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const userPersonalPosts=(state={posts: {posts: []}}, action)=>{
    switch(action.type){
        case USER_POST_REQUEST:
            return {...state, loading1: true}
        case USER_POST_SUCCESS:
            return {loading1: false, posts: action.payload}
        case USER_POST_FAIL:
            return {loading1: false, posts: {posts: []}, error1: action.payload}
        default:
            return state
    }
}

export const userDetails= (state={}, action)=>{

}