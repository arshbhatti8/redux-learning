import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import {reducer} from '../Components/Counter/index';
import {initialState} from '../Components/Counter/Counter.reducer';

const store = createStore(reducer,initialState,applyMiddleware(thunk));

window.store = store;

export default store;