import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { persistStore } from 'redux-persist'
import userReducer from './userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer']
}

const rootReducer = combineReducers({
    userReducer
    
})

const per = persistReducer (persistConfig,rootReducer)




export const store = createStore(per, composeWithDevTools (applyMiddleware(promiseMiddleware)))

export const persistor = persistStore(store)

export default {store, persistor}