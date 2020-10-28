import Axios from "axios"
import { URL_API } from "../../supports/constants/urlApi"
import { HOTELS_ERROR, HOTELS_LOADED, HOTELS_LOADING,SORT_PRICE_ASC } from "../actionTypes"

export const getAllHotels = () => {
    return (dispatch) => {

        dispatch({
            type : HOTELS_LOADING
        })
        Axios.get(URL_API + '/hotels')
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