import Axios from "axios"
import { URL_API } from "../../supports/constants/urlApi"

export const onUserRegister = (email,password) => {
    return (dispatch) => {
        try {
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
                    payload : err.message
                }
            )
        }
    }
}
