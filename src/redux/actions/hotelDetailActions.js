import Axios from "axios"
import { URL_API } from "../../supports/constants/urlApi"
import { HOTEL_DETAIL_ERROR, HOTEL_DETAIL_LOADED, HOTEL_DETAIL_LOADING } from "../actionTypes"

export const getHotelDetailById = (id) => {
    return async (dispatch) => {
        dispatch({
            type : HOTEL_DETAIL_LOADING
        })

        try {
            let response = await Axios.get(URL_API + '/hotels/' + id)
            dispatch({
                type : HOTEL_DETAIL_LOADED,
                payload : response.data
            })
        } catch (error) {
            dispatch({
                type : HOTEL_DETAIL_ERROR,
                payload : error.message
            })
        }
       
     
    }

    
}