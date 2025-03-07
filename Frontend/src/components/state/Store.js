import { thunk } from "redux-thunk"
import { authReducer } from "./authentication/Reducer"
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"

const rooteReducer= combineReducers({
    auth:authReducer,
})

export const  store = legacy_createStore(rooteReducer,applyMiddleware(thunk))
