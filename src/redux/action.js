import axios from 'axios'
import {USER,LOGIN,LOGOUT,
    THREADS,ADD_THREAD,EDIT_THREAD,DELETE_THREAD,
    COMMENTS,ADD_COMMENT,EDIT_COMMENT,DELETE_COMMENT} from './action-type'

// export const validateLogin = (payload) =>{
//     let options = {
//         method:'GET',
//         url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/user?email='+payload.email+"&password="+payload.password
//     }
//     return async (dispatch, getState) => {
//         try{
//             let curr = await getState()
//             let state = []
//             if(curr.user !== undefined){
//                 state = curr.user
//             }
            
//             let {data} = await axios(options)
//             dispatch(login(data))
//         }catch (error){
//             console.error(error);
//         }
//     }
// }
export const actionErr = (payload) => {
    return {
        type: 'ERROR',
        payload
    }
}
export const users = (payload) =>{
    let options = {
        method:'GET',
        url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/user'
    }
    return async (dispatch, getState) => {
        try{
            let curr = await getState()
            let state = []
            if(curr.users !== undefined){
                state = curr.users
            }else{
                let {data} = await axios(options)
                state = [...data]
            }
            dispatch(user(state))
        }catch (error){
            console.error(error);
        }
    }
}
export const validateLogin = (payload) =>{
    return (dispatch, getState) => {
        let options = {
            method:'GET',
            url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/user?email='+payload.email+"&password="+payload.password
        }
        axios(options)
        .then(response => {
            let data= response.data[0]
            if (response.status === 200) {
              localStorage.setItem('token', data.token)
              localStorage.setItem('id', data.id)
              localStorage.setItem('name', data.name)
              let token = localStorage.getItem('token')
              let id = localStorage.getItem('id')
              let name = localStorage.getItem('name')
              let user = {
                  id: id,
                  name: name,
                  token: token
              }
              if (token && id) {
                dispatch(login(user))
              }
            } else {
              dispatch(actionErr(response.statusText))
            }
          })
    }
}
export const user = (payload) => {
    return {
        type:USER,
        payload
    }
}
export const login = (payload) => {
    return {
        type:LOGIN,
        payload
    }
}
export const logout = (payload) => {
    localStorage.clear()
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
            }else{
                let {data} = await axios(options)
                state = [...data]
            }
            // console.log("===========>",state);
            // let {data} = await axios(options)
            dispatch(setThreads(state))
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
export const addThread = (payload) => {
    return {
        type:ADD_THREAD,
        payload
    }
}
export const editThread = (payload) => {
    return {
        type:EDIT_THREAD,
        payload
    }
}
export const deleteThread = (payload) => {
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
            else{
                let {data} = await axios(options)
                state = [...data]
            }
            // console.log("===========>",state);
            // let {data} = await axios(options)
            dispatch(setComments(state))
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
export const addComment = (payload) => {
    return {
        type:ADD_COMMENT,
        payload
    }
}
export const editComment = (payload) => {
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