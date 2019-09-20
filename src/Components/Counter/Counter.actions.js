import {createAction} from 'redux-actions';
import {fakeApiRequest} from './Counter.utils';

import {INCREMENT,DECREMENT,UPDATE_RANDOM_STRING} from './Counter.constants';

// export const increment = createAction(INCREMENT);



const updateRandomNumberString = (state,value) => { 
    let randomNumberString = state.randomNumberString;
    return randomNumberString === "" ? randomNumberString += `${value}`: randomNumberString += `,${value}`;
}

export const incrementAction = createAction(INCREMENT);
export const decrementAction = createAction(DECREMENT);
export const updateRandomNumberStringAction = createAction(UPDATE_RANDOM_STRING);

export const increment = () => (dispatch,getState) => {
    const initializeRequest = fakeApiRequest();
    initializeRequest.then((value)=>{
        const state = getState();
        dispatch(incrementAction(value));
        dispatch(updateRandomNumberStringAction(updateRandomNumberString(state,value)));
    })
    .catch((err=>console.log("Error:",err)));
}

export const decrement = () => (dispatch,getState) => {
    const initializeRequest = fakeApiRequest();
    initializeRequest.then((value)=>{
        const state = getState();
        dispatch(decrementAction(value));
        dispatch(updateRandomNumberStringAction(updateRandomNumberString(state,-value)));
    })
    .catch((err=>console.log("Error:",err)));
}

