import counterReducer from './counterReducer'
import userReducer from './userReducer'
import {combineReducers} from 'redux'
import hotelsReducer from './hotelsReducer'

const rootReducer = combineReducers(
    {
        user : userReducer,
        counter : counterReducer,
        hotels : hotelsReducer
    }
)

export default rootReducer
