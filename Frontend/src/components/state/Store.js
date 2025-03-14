// import { thunk } from "redux-thunk"
// import { authReducer } from "./authentication/Reducer"
// import {applyMiddleware, combineReducers, legacy_createStore} from "redux"

// const rooteReducer= combineReducers({
//     auth:authReducer,
// })

// export const  store = legacy_createStore(rooteReducer,applyMiddleware(thunk))




// import { thunk } from "redux-thunk";
// import { authReducer } from "./authentication/Reducer";
// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

// const rootReducer = combineReducers({
//     auth: authReducer,
// });

// // Load user & token from localStorage
// const storedUser = localStorage.getItem("user");
// const storedToken = localStorage.getItem("token");

// const initialState = {
//     auth: {
//         user: storedUser ? JSON.parse(storedUser) : null,
//         jwt: storedToken || null,
//         isLoading: false,
//         error: null,
//         favorites: [],
//         success: null,
//     },
// };

// export const store = legacy_createStore(rootReducer, initialState, applyMiddleware(thunk));




import { thunk } from "redux-thunk";
// import authReducer from "./authentication/Reducer"; // ✅ Fixed Import
import { authReducer } from "./authentication/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
});

// Load user & token from localStorage
const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("token");

const initialState = {
    auth: {
        user: storedUser ? JSON.parse(storedUser) : null,
        jwt: storedToken || null,
        isLoading: false,
        error: null,
        favorites: [],
        success: null,
    },
};

export const store = legacy_createStore(rootReducer, initialState, applyMiddleware(thunk));
