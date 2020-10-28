import counterReducer from './counterReducer'
import userReducer from './userReducer'
import {combineReducers} from 'redux'
import hotelsReducer from './hotelsReducer'
import hotelDetailReducer from './hotelDetailReducer'

const rootReducer = combineReducers(
    {
        user : userReducer,
        counter : counterReducer,
        hotels : hotelsReducer,
        hotelDetail : hotelDetailReducer
    }
)

export default rootReducer
