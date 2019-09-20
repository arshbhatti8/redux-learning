import {handleActions} from 'redux-actions';

import {incrementAction,decrementAction,updateRandomNumberStringAction} from './Counter.actions';

export const initialState = {number:0,payload:null,randomNumberString:""}

// const reducer = (state=initialState,action) => {

//     switch(action.type){
//         case "INCREMENT":
//         return {...state, number:state.number+1}
//         case "DECREMENT":
//         return {...state, number:state.number-1}
//         default :
//         return state
//     }
// }

const incrementHandler = (state,{payload}) => ({...state,payload:payload,number:state.number+payload});

const decrementHandler = (state,{payload}) => ({...state,payload:payload,number:state.number-payload});

const updateRandomNumberStringHandler = (state,{payload}) => ({...state,randomNumberString:payload});

// randomNumber.forEach(element => {
//     randomNumberString += `,${element}`
// });
export default handleActions (
    {
        [incrementAction] : incrementHandler,
        [decrementAction] : decrementHandler,
        [updateRandomNumberStringAction] : updateRandomNumberStringHandler
    },
    initialState)

