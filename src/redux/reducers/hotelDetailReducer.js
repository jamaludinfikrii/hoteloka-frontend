import { HOTEL_DETAIL_ERROR, HOTEL_DETAIL_LOADED, HOTEL_DETAIL_LOADING } from "../actionTypes"

const data = {
    loading : false,
    data : null,
    error : null
}


export default (state=data,action) => {
    switch(action.type){
        case HOTEL_DETAIL_LOADING:
            return {...state,loading : true}
        case HOTEL_DETAIL_LOADED :
            return {...state,loading : false,data : action.payload}
        case HOTEL_DETAIL_ERROR :
            return {...state,loading: false,error : action.payload}
        default:
            return state
    }
}