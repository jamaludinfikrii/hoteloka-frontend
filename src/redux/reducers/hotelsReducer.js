const { HOTELS_ERROR,HOTELS_LOADED,HOTELS_LOADING } = require("../actionTypes")

const data = {
    loading : false,
    data : null,
    error : null
}


function hotelsReducer (state=data,action) {
    switch(action.type){
        case HOTELS_LOADING :
            return {loading : true, data : null ,erorr : null}
        case HOTELS_LOADED:
            return {loading : false, data : action.payload , error : null}
        case HOTELS_ERROR:
            return {...state, loading : false, error : action.payload}
        default : 
            return state
    }
}

export default hotelsReducer;