const { HOTELS_ERROR,HOTELS_LOADED,HOTELS_LOADING, SORT_PRICE_ASC } = require("../actionTypes")

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
        case SORT_PRICE_ASC:
            let hotelSorted = [...state.data]
            hotelSorted.sort((a,b) => {
                return a.price - b.price
            })

            return {...state,data : hotelSorted}
        default : 
            return state
    }
}

export default hotelsReducer;