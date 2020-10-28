const { LOADING, DATA_LOADED, ERROR } = require("../actionTypes")

const data = {
    loading : false,
    data : null,
    error : null
}


function hotelsReducer (state=data,action) {
    switch(action.type){
        case LOADING :
            return {loading : true, data : null}
        case DATA_LOADED:
            return {loading : false, data : action.payload}
        case ERROR:
            return {...state, loading : false, error : action.payload}
        default : 
            return state
    }
}

export default hotelsReducer;