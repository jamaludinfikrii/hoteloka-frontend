import Axios from "axios"
import { URL_API } from "../../supports/constants/urlApi"
import AsyncStorage from '@react-native-async-storage/async-storage';



export const onUserRegister = (email,password) => {
    return (dispatch) => {
        try {
            dispatch(
                {
                    type : "LOADING"
                }
            )

            if(!email || !password) throw new Error('form must be filled')
            Axios.post(URL_API + '/auth/register' , {email,password})
            .then((res) => {
                if(res.data.error){
                    dispatch(
                        {
                            type : "ERROR",
                            payload : res.data.message
                        }
                    )
                }else{
                    
                    AsyncStorage.setItem('@token',res.data.token)
                    .then((response) => {
                        dispatch(
                            {
                                type : "AUTH_SUCCESS",
                                payload : res.data.token
                            }
                        )
                    })
                    .catch((err) => {
                        dispatch(
                            {
                                type : "ERROR",
                                payload : err.message
                            }
                        )
                    })
                    
                }
            })
            .catch((err) => {
                console.log(err)
                dispatch(
                    {
                        type : "ERROR",
                        payload : err.message
                    }
                )
            })
        } catch (error) {
            console.log(error)
            dispatch(
                {
                    type : "ERROR",
                    payload : error.message
                }
            )
        }
    }
}


export const onSaveToken = (token) => {
    return{
        type : "AUTH_SUCCESS",
        payload : token
    }
}