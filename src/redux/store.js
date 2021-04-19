import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    userReducer
    
})

export default createStore(rootReducer, composeWithDevTools (applyMiddleware(promiseMiddleware)))