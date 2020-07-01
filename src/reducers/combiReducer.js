import counterReducer from './counter'
import loggedReducer from './isLoggedin'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogin: loggedReducer
})

// bisa juga jika nama akan disamakan aslinya
// const allReducers = combineReducers({
//     counterReducer,                          =>  counterReducer : counterReducer
//     loggedReducer                            =>  loggedReducer : loggedReducer
// })

export default allReducers