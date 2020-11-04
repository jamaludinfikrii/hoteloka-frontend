import Axios from "axios"
import { URL_API } from "../../supports/constants/urlApi"
import { CHANGE_DATE_FILTER_HOTEL, HOTELS_ERROR, HOTELS_LOADED, HOTELS_LOADING,SORT_PRICE_ASC } from "../actionTypes"

export const getAllHotels = (date) => {
    return (dispatch) => {

        dispatch({
            type : HOTELS_LOADING
        })
        Axios.get(URL_API + '/hotels?date='+date)
        .then((res) => {
            if(res.data.error){
                dispatch({
                    type : HOTELS_ERROR,
                    payload : res.data.message
                })
            }else{
                dispatch({
                    type : HOTELS_LOADED,
                    payload : res.data.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type : HOTELS_ERROR,
                payload : err.message
            })
        })
    }
}

export const sortHotelByPriceAsc = () => {
    return{
        type : SORT_PRICE_ASC
    }
}


export const onChangeDateHotelFilter = (ev,selectedDate) => {
    return{
        type : CHANGE_DATE_FILTER_HOTEL,
        payload : selectedDate
    }
}   