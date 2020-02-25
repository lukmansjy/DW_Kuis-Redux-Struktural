//COnnector Reducer to Actions
import { createStore, combineReducers, applyMiddleware } from 'redux';

import {logger} from './middleware'

//Insert Reducers
import mathR from '../_reducers/mathR';

const reducers = combineReducers({
    mathR
})

const store = 
createStore(reducers, 
applyMiddleware(logger));

export default store