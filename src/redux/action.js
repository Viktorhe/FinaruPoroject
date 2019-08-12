import axios from 'axios'

// export const incAction = (payload) => {
//     return {
//         type:'INCREMENT',
//         payload
//     }
// }
// export const decAction = (payload) => {
//     return {
//         type:'DECREMENT',
//         payload
//     }
// }
export const fetchThunk = () => {
    let options = {
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/users'
    }
    return async (dispatch, getState) => {
        try{
            let curr = await getState()
            let state = []
            if(curr.users !== undefined){
                state = curr.users
            }
            console.log("===========>",state);
            
            
            let {data} = await axios(options)
            dispatch(fetchAction(data))
        }catch (error){
            console.error(error);
        }
        // axios(options)
        // .then(({data}) => {
        //     dispatch(fetchAction(data))
        //     console.log(data)
        // })
        // .catch( error =>{
        //     console.error(error);
        // })
    }
}
// export const fetchAction = (payload) => {
//     return {
//         type:'USERS',
//         payload
//     }
// }