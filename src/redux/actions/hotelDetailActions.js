import Axios from "axios"
import { URL_API } from "../../supports/constants/urlApi"
import { HOTEL_DETAIL_ERROR, HOTEL_DETAIL_LOADED, HOTEL_DETAIL_LOADING } from "../actionTypes"

export const getHotelDetailById = (id,date,end) => {
    return async (dispatch) => {
        dispatch({
            type : HOTEL_DETAIL_LOADING
        })

        try {
            let response = await Axios.get(URL_API + '/hotels/' + id + '?date=' + date + '&end=' + end)
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