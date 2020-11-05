const { HOTELS_ERROR,HOTELS_LOADED,HOTELS_LOADING, SORT_PRICE_ASC, CHANGE_DATE_FILTER_HOTEL, CHANGE_DATE_END_FILTER_HOTEL } = require("../actionTypes")


const data = {
    loading : false,
    data : null,
    error : null,
    filterDate : new Date(),
    filterDateEnd : new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate() + 1)
}


function hotelsReducer (state=data,action) {
    switch(action.type){
        case HOTELS_LOADING :
            return {...state, loading : true, data : null ,erorr : null}
        case HOTELS_LOADED:
            return {...state, loading : false, data : action.payload , error : null}
        case HOTELS_ERROR:
            return {...state, loading : false, error : action.payload}
        case SORT_PRICE_ASC:
            let hotelSorted = [...state.data]
            hotelSorted.sort((a,b) => {
                return a.price - b.price
            })

            return {...state,data : hotelSorted}
        case CHANGE_DATE_FILTER_HOTEL :
            return {...state,filterDate : action.payload,filterDateEnd : new Date(action.payload.getFullYear(),action.payload.getMonth(),action.payload.getDate() + 1)}
        case CHANGE_DATE_END_FILTER_HOTEL : 
            return {...state,filterDateEnd : action.payload}
        default : 
            return state
    }
}

export default hotelsReducer;