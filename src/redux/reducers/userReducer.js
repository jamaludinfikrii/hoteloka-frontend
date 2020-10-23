let data = {
    token : '',
    error : ""
}

const userReducer = (state=data,action) => {
    if(action.type === 'ERROR'){
        return {error : action.payload,token : ""}
    }
    return data
}

export default userReducer