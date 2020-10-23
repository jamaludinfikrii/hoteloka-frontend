let data = {
    token : '',
    error : "",
    loading : false
}

const userReducer = (state=data,action) => {
    // if(action.type === 'ERROR'){
    //     return {error : action.payload, token : ""}
    // }else if(action.type === 'AUTH_SUCCESS'){
    //     return {token : action.payload,error : ""}
    // }
    // return data

    switch(action.type){
        case "ERROR":
            return {error : action.payload , token : "",loading : false}
        case "AUTH_SUCCESS":
            return {token : action.payload, error : "",loading : false}
        case "LOADING":
            return {token : "", error : "", loading : true}
        default : 
            return state
    }
}

export default userReducer