import Axios from "axios"
import { URL_API } from "../../supports/constants/urlApi"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_SUCCESS, ERROR, LOADING,CHANGE_EMAIL,CHANGE_PASSWORD,LOGOUT } from "../actionTypes";



export const onUserRegister = (email,password) => {
    return (dispatch) => {
        try {
            dispatch(
                {
                    type : LOADING
                }
            )

            if(!email || !password) throw new Error('form must be filled')
            Axios.post(URL_API + '/auth/register' , {email,password})
            .then((res) => {
                if(res.data.error){
                    dispatch(
                        {
                            type : ERROR,
                            payload : res.data.message
                        }
                    )
                }else{
                    
                    AsyncStorage.setItem('@token',res.data.token)
                    .then((response) => {
                        dispatch(
                            {
                                type :AUTH_SUCCESS,
                                payload : res.data.token
                            }
                        )
                    })
                    .catch((err) => {
                        dispatch(
                            {
                                type : ERROR,
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
                        type : ERROR,
                        payload : err.message
                    }
                )
            })
        } catch (error) {
            console.log(error)
            dispatch(
                {
                    type : ERROR,
                    payload : error.message
                }
            )
        }
    }
}


export const onSaveToken = (token) => {
    return{
        type : AUTH_SUCCESS,
        payload : token
    }
}


export const onLogotCLick = () => {
    return (dispatch) => {
        AsyncStorage.removeItem('@token')
        .then((res) => {
            dispatch(
                {
                    type : LOGOUT
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type : ERROR,
                    payload : err.message
                }
            )
        })
    }
}


export const onEmailChange = (text) => {
    return{
        type : CHANGE_EMAIL,
        payload : text
    }
}

export const onPasswordChange = (text) => {
    return{
        type : CHANGE_PASSWORD,
        payload : text
    }
}


export const onLoginClick = (email,password) => {
    return (dispatch) => {
        dispatch(
            {
                type : LOADING
            }
        )

        Axios.post(URL_API + '/auth/login',{email,password})
        .then((res) => {
            if(res.data.error){
                dispatch(
                    {
                        type : ERROR,
                        payload : res.data.message
                    }
                )
            }else{
                
                AsyncStorage.setItem('@token',res.data.token)
                .then((response) => {
                    dispatch(
                        {
                            type :AUTH_SUCCESS,
                            payload : res.data.token
                        }
                    )
                })
                .catch((err) => {
                    dispatch(
                        {
                            type : ERROR,
                            payload : err.message
                        }
                    )
                })
                
            }
        })
        .catch((err) => {
            dispatch(
                {
                    type : ERROR,
                    payload : err.message
                }
            )
        })
    }
}