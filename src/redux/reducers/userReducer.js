import { AUTH_SUCCESS, CHANGE_EMAIL, CHANGE_PASSWORD, ERROR, LOADING, LOGOUT } from "../actionTypes"

let data = {
    token : '',
    error : "",
    loading : false,
    email : "",
    password : ""
}

const userReducer = (state=data,action) => {
    switch(action.type){
        case ERROR:
            return {...state,error : action.payload , token : "",loading : false}
        case AUTH_SUCCESS:
            return {token : action.payload, error : "",loading : false}
        case LOADING:
            return {...state, token : "", error : "", loading : true}
        case LOGOUT : 
            return {...data,token : "",error : "", loading : false}
        case CHANGE_EMAIL : 
            return{...state, error : "",token : "",loading : false,email : action.payload}
        case CHANGE_PASSWORD :
            return{...state, error : "",token : "",loading : false,password : action.payload}
        default : 
            return state
    }
}

export default userReducer