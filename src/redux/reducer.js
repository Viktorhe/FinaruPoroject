import {USER,LOGIN,LOGOUT,
    THREADS,ADD_THREAD,EDIT_THREAD,DELETE_THREAD,
    COMMENTS,ADD_COMMENT,EDIT_COMMENT,DELETE_COMMENT} from './action-type'

const emptyUser={
    id:0,
    name:""
}
const defaultState={
    user:emptyUser,
    users:[],
    threads:[],
    comments:[]
}

const myReducer = (state=defaultState, action) => {
    switch(action.type){
        case USER:{
            return {...state, users:action.payload}
        }
        case LOGIN:{
            return {...state, user:action.payload}
        }
        case LOGOUT:{
            return {...state, user:emptyUser}
        }
        case THREADS:{
            return {...state, threads:action.payload}
        }
        case ADD_THREAD:{
            return {...state, threads : state.threads.concat(action.payload)}
        }
        case EDIT_THREAD:{
            return {...state, threads : [...state.threads.map(item => item.id === action.payload.id ? action.payload : item)]}
        }
        case DELETE_THREAD:{
            return {...state, threads:[...state.threads.filter(item => item.id !== action.payload.id)]}
        }
        case COMMENTS:{
            return {...state, comments:action.payload}
        }
        case ADD_COMMENT:{
            return {...state, comments:state.comments.concat(action.payload)}
        }
        case EDIT_COMMENT:{
            return {...state, comments : [...state.comments.map(item => item.id === action.payload.id ? action.payload : item)]}
        }
        case DELETE_COMMENT:{
            return {...state, comments:[...state.comments.filter(item => item.id !== action.payload.id)]}
        }
        default:
            return 0
    }
}
export default myReducer