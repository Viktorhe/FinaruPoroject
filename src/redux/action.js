import axios from 'axios'
import {USER,LOGIN,LOGOUT,
    THREADS,ADD_THREAD,EDIT_THREAD,DELETE_THREAD,
    COMMENTS,ADD_COMMENT,EDIT_COMMENT,DELETE_COMMENT} from './action-type'

// export const fetchUsers = () => {
//     let options = {
//         method:'GET',
//         url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/user'
//     }
//     return async (dispatch, getState) => {
//         try{
//             let curr = await getState()
//             let state = []
//             if(curr.user !== undefined){
//                 state = curr.user
//             }
//             console.log("===========>",state);
            
//             let {data} = await axios(options)
//             dispatch(setUser(data))
//         }catch (error){
//             console.error(error);
//         }
//     }
// }
// export const setUser = (payload) => {
//     return {
//         type:USER,
//         payload
//     }
// }
export const validateLogin = (email,password) =>{
    let options = {
        method:'GET',
        url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/user?email='+email+"&password="+password
    }
    return async (dispatch, getState) => {
        try{
            let curr = await getState()
            let state = []
            if(curr.user !== undefined){
                state = curr.user
            }
            console.log("===========>",state);
            
            let {data} = await axios(options)
            dispatch(login(data))
        }catch (error){
            console.error(error);
        }
    }
}
export const login = (payload) => {
    return {
        type:LOGIN,
        payload
    }
}
export const logout = (payload) => {
    return {
        type:LOGOUT,
        payload
    }
}
export const fetchThreads = () => {
    let options = {
        method:'GET',
        url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/threads'
    }
    return async (dispatch, getState) => {
        try{
            let curr = await getState()
            let state = []
            if(curr.threads !== undefined){
                state = curr.threads
            }
            console.log("===========>",state);
            
            let {data} = await axios(options)
            dispatch(setThreads(data))
        }catch (error){
            console.error(error);
        }
    }
}

export const setThreads = (payload) => {
    return {
        type:THREADS,
        payload
    }
}
export const addThreads = (payload) => {
    return {
        type:ADD_THREAD,
        payload
    }
}
export const editThreads = (payload) => {
    return {
        type:EDIT_THREAD,
        payload
    }
}
export const deleteThreads = (payload) => {
    return {
        type:DELETE_THREAD,
        payload
    }
}
export const fetchComments = () => {
    let options = {
        method:'GET',
        url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/comments'
    }
    return async (dispatch, getState) => {
        try{
            let curr = await getState()
            let state = []
            if(curr.comments !== undefined){
                state = curr.comments
            }
            console.log("===========>",state);
            
            let {data} = await axios(options)
            dispatch(setComments(data))
        }catch (error){
            console.error(error);
        }
    }
}
export const setComments = (payload) => {
    return {
        type:COMMENTS,
        payload
    }
}
export const addComments = (payload) => {
    return {
        type:ADD_COMMENT,
        payload
    }
}
export const editComments = (payload) => {
    return {
        type:EDIT_COMMENT,
        payload
    }
}
export const deleteComment = (payload) => {
    return {
        type:DELETE_COMMENT,
        payload
    }
}