import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer, userRegisterReducer, userPersonalPosts} from './reducers/userReducers'

const reducer= combineReducers({
    userLoginDetails: userLoginReducer,
    userRegisterDetails: userRegisterReducer,
    userPosts: userPersonalPosts
})  

const userFromStorage= localStorage.getItem('userDetails')?  JSON.parse(localStorage.getItem('userDetails')): null;

const initialState= {
    userLoginDetails:{
        userDetails: userFromStorage
    }
}

const middleWare= [thunk]

const store= createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
