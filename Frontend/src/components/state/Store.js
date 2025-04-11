
import { thunk } from "redux-thunk";
import { authReducer } from "./authentication/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import restaurantReducer from "./restaurant/Reducer";
import menuItemReducer from "./menu/Reducer";
import cartReducer from "./cart/Reducer";
import { orderReducer } from "./order/Reducer";
import restaurantsOrderReducer from "./restaurant Order/Reducer";
import { ingredientReducer } from "./ingredients/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant:restaurantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,
    restaurantOrder: restaurantsOrderReducer,
    ingredients: ingredientReducer
});

// Load user & token from localStorage
const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("jwt");

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
