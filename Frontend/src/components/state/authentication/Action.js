// import { api, API_URL } from "../../config/api"
// import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
// import axios from "axios"

// export const registerUser=(reqData)=>async(dispatch)=>{
//     dispatch({type:REGISTER_REQUEST})
//     try{
//         const {data}=await axios.post(`${API_URL}/auth/signup`,reqData.userData);
//         // console.log("API Response Data: ", data);
//         if(data.jwt)localStorage.setItem("jwt",data.jwt);
//         if(data.role ==="ROLE_RESTAURANT_OWNER"){
//             reqData.navigate("/admin/restaurant")
//         }
//         else{
//             reqData.navigate("/")
//         }
//         dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
//         console.log("Register Success",data)

//     } catch (error) {
//         dispatch({type:REGISTER_FAILURE,payload:error})
//         console.log("error",error)
//     }
// }

// export const loginUser=(reqData)=>async(dispatch)=>{
//     dispatch({type:LOGIN_REQUEST})
//     try{
//         const {data}=await axios.post(`${API_URL}/auth/signin`,reqData.userData)
//         if(data.jwt)localStorage.setItem("jwt",data.jwt);
//         if(data.role ==="ROLE_RESTAURANT_OWNER"){
//             reqData.navigate("/admin/restaurant")
//         }
//         else{
//             reqData.navigate("/")
//         }
//         dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
//         console.log("login success",data)

//     } catch (error) {
//         dispatch({type:LOGIN_FAILURE,payload:error})

//         console.log("error",error)
//     }
// }


// export const getUser=(jwt)=>async(dispatch)=>{
//     dispatch({type:GET_USER_REQUEST})
//     try{
//         console.log("JWT Token:", jwt);
//         const {data}=await api.get(`/api/users/profile`,{
//             headers:{
//                 Authorization:`Bearer ${jwt}`
//             }
//         })
        
//         dispatch({type:GET_USER_SUCCESS,payload:data})
//         console.log("user profile:",data)
//     } catch (error) {
//         dispatch({type:GET_USER_FAILURE,payload:error})

//         console.log("Error fetching user profile:",error)
//     }
// }

// export const addToFavorite=({jwt,restaurantId})=>async(dispatch)=>{
//     dispatch({type:ADD_TO_FAVORITE_REQUEST})
//     try{
//         const {data}=await api.put(`/auth/restaurants${restaurantId}/add-favorite`,{},{
//             headers:{
//                 Authorization:`Bearer ${jwt}`
//             }
//         })
        
//         dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data})
//         console.log("Added to favorite",data)
//     } catch (error) {
//         dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})

//         console.log("error",error)
//     }
// }


// export const logout=()=>async(dispatch)=>{
//     try{
//         localStorage.clear();
//         dispatch({type:LOGOUT})
//         console.log("logout success")
//     } catch (error) {
//         console.log("error",error)
//     }
// }





// import { api, API_URL } from "../../config/api";
// import { 
//     ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, 
//     GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, // ✅ Added missing import
//     LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, 
//     LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS 
// } from "./ActionType";
// import axios from "axios";

// // export const registerUser = (reqData) => async (dispatch) => {
// //     dispatch({ type: REGISTER_REQUEST });
// //     try {
// //         const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        
// //         if (data.jwt) localStorage.setItem("jwt", data.jwt);

// //         if (data.role === "ROLE_RESTAURANT_OWNER") {
// //             reqData.navigate("/admin/restaurant");
// //         } else {
// //             reqData.navigate("/");
// //         }

// //         dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
// //         console.log("Register Success", data);
// //     } catch (error) {
// //         dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || error.message });
// //         console.log("Register Error", error);
// //     }
// // };
// export const registerUser = (reqData) => async (dispatch) => {
//     dispatch({ type: REGISTER_REQUEST });
//     try {
//         const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        
//         if (data.jwt) localStorage.setItem("token", data.jwt); // Use consistent token key

//         if (data.role === "ROLE_RESTAURANT_OWNER") {
//             reqData.navigate("/admin/restaurant");
//         } else {
//             reqData.navigate("/");
//         }

//         dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
//         console.log("Register Success", data);
//     } catch (error) {
//         dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || error.message });
//         console.log("Register Error", error);
//     }
// };

// export const loginUser = ({ userData, navigate }) => async (dispatch) => {
//     try {
//         const response = await axios.post("/api/auth/login", userData);
//         console.log("Login Success", response.data);

//         dispatch({
//             type: "LOGIN_SUCCESS",
//             payload: {
//                 jwt: response.data.jwt,
//                 user: response.data.user,  // ✅ Ensure backend sends user data
//             }
//         });

//         localStorage.setItem("token", response.data.jwt);
//         localStorage.setItem("user", JSON.stringify(response.data.user));  // ✅ Save user details

//         navigate("/");
//     } catch (error) {
//         console.error("Login Error:", error);
//         dispatch({
//             type: "LOGIN_FAILURE",
//             payload: error.response?.data?.message || "Login failed"
//         });
//     }
// };




// // export const getUser = (jwt) => async (dispatch) => {
// //     dispatch({ type: GET_USER_REQUEST });
// //     try {
// //         console.log("JWT Token:", jwt);

// //         const { data } = await api.get(`/users/profile`, {  // ✅ Fixed API endpoint
// //             headers: {
// //                 Authorization: `Bearer ${jwt}`
// //             }
// //         });

// //         dispatch({ type: GET_USER_SUCCESS, payload: data });
// //         console.log("User Profile:", data);
// //     } catch (error) {
// //         dispatch({ type: GET_USER_FAILURE, payload: error.response?.data?.message || error.message });
// //         console.log("Error Fetching User Profile:", error);
// //     }
// // };

// export const getUser = () => async (dispatch) => {
//     dispatch({ type: GET_USER_REQUEST });
//     try {
//         const jwt = localStorage.getItem("token"); // Use consistent token key
        
//         if (!jwt) {
//             throw new Error("No authentication token found");
//         }
        
//         console.log("JWT Token:", jwt);

//         const { data } = await api.get(`/users/profile`, {
//             headers: {
//                 Authorization: `Bearer ${jwt}`
//             }
//         });

//         dispatch({ type: GET_USER_SUCCESS, payload: data });
//         console.log("User Profile:", data);
//     } catch (error) {
//         dispatch({ type: GET_USER_FAILURE, payload: error.response?.data?.message || error.message });
//         console.log("Error Fetching User Profile:", error);
//     }
// };


// export const addToFavorite = ({ jwt, restaurantId }) => async (dispatch) => {
//     dispatch({ type: ADD_TO_FAVORITE_REQUEST });
//     try {
//         const { data } = await api.put(`/auth/restaurants/${restaurantId}/add-favorite`, {}, {  // ✅ Fixed missing "/"
//             headers: {
//                 Authorization: `Bearer ${jwt}`
//             }
//         });

//         dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
//         console.log("Added to Favorite", data);
//     } catch (error) {
//         dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error.response?.data?.message || error.message });
//         console.log("Error Adding to Favorite", error);
//     }
// };

// export const logout = () => async (dispatch) => {
//     try {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         console.log("Logout Success");
//     } catch (error) {
//         console.log("Logout Error", error);
//     }
// };







// import { api, API_URL } from "../../config/api"
// import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
// import axios from "axios"

// export const registerUser=(reqData)=>async(dispatch)=>{
//     dispatch({type:REGISTER_REQUEST})
//     try{
//         const {data}=await axios.post(`${API_URL}/auth/signup`,reqData.userData);
//         // console.log("API Response Data: ", data);
//         if(data.jwt)localStorage.setItem("jwt",data.jwt);
//         if(data.role ==="ROLE_RESTAURANT_OWNER"){
//             reqData.navigate("/admin/restaurant")
//         }
//         else{
//             reqData.navigate("/")
//         }
//         dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
//         console.log("Register Success",data)

//     } catch (error) {
//         dispatch({type:REGISTER_FAILURE,payload:error})
//         console.log("error",error)
//     }
// }

// export const loginUser=(reqData)=>async(dispatch)=>{
//     dispatch({type:LOGIN_REQUEST})
//     try{
//         const {data}=await axios.post(`${API_URL}/auth/signin`,reqData.userData);
        
//         if(data.jwt)localStorage.setItem("jwt",data.jwt);
//         if(data.role ==="ROLE_RESTAURANT_OWNER"){
//             reqData.navigate("/admin/restaurant")
//         }
//         else{
//             reqData.navigate("/")
//         }
//         dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
//         console.log("login success",data)

//     } catch (error) {
//         dispatch({type:LOGIN_FAILURE,payload:error})

//         console.log("error",error)
//     }
// }


// export const getUser=()=>async(dispatch)=>{
//     dispatch({type:GET_USER_REQUEST})
//     try{
//         const jwt = localStorage.getItem("jwt");
        
//         if (!jwt) {
//             throw new Error("No JWT token found in localStorage");
//         }
        
//         console.log("JWT Token:", jwt);
//         const {data}=await api.get(`/users/profile`,{
//             headers:{
//                 Authorization:`Bearer ${jwt}`
//             }
//         })
        
//         dispatch({type:GET_USER_SUCCESS,payload:data})
//         console.log("user profile:",data)
//     } catch (error) {
//         dispatch({type:GET_USER_FAILURE,payload:error})

//         console.log("Error fetching user profile:",error)
//     }
// }

// export const addToFavorite=({restaurantId})=>async(dispatch)=>{
//     dispatch({type:ADD_TO_FAVORITE_REQUEST})
//     try{
//         const jwt = localStorage.getItem("jwt");
        
//         if (!jwt) {
//             throw new Error("No JWT token found in localStorage");
//         }
        
//         const {data}=await api.put(`/auth/restaurants/${restaurantId}/add-favorite`,{},{
//             headers:{
//                 Authorization:`Bearer ${jwt}`
//             }
//         })
        
//         dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data})
//         console.log("Added to favorite",data)
//     } catch (error) {
//         dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})

//         console.log("error",error)
//     }
// }


// export const logout=()=>async(dispatch)=>{
//     try{
//         localStorage.clear();
//         dispatch({type:LOGOUT})
//         console.log("logout success")
//     } catch (error) {
//         console.log("error",error)
//     }
// }





// import { api, API_URL } from "../../config/api";
// import { 
//     ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, 
//     GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, 
//     LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, 
//     LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS 
// } from "./ActionType";
// import axios from "axios";

// // Register User
// export const registerUser = (reqData) => async (dispatch) => {
//     dispatch({ type: REGISTER_REQUEST });
//     try {
//         const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        
//         if (data.jwt) {
//             localStorage.setItem("jwt", data.jwt);
//         }

//         reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");

//         dispatch({ type: REGISTER_SUCCESS, payload: data });
//         console.log("Register Success", data);

//     } catch (error) {
//         dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || "Registration Failed" });
//         console.error("Register Error:", error);
//     }
// };

// // Login User
// export const loginUser = (reqData) => async (dispatch) => {
//     dispatch({ type: LOGIN_REQUEST });
//     try {
//         const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);

//         if (data.jwt) {
//             localStorage.setItem("jwt", data.jwt);
//         }

//         reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");

//         dispatch({ type: LOGIN_SUCCESS, payload: data });
//         console.log("Login Success", data);

//     } catch (error) {
//         dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.message || "Login Failed" });
//         console.error("Login Error:", error);
//     }
// };

// // Get User Profile
// export const getUser = () => async (dispatch) => {
//     dispatch({ type: GET_USER_REQUEST });
//     try {
//         const jwt = localStorage.getItem("jwt");
//         if (!jwt) throw new Error("No JWT token found");

//         const { data } = await api.get(`/users/profile`, {
//             headers: { Authorization: `Bearer ${jwt}` }
//         });

//         dispatch({ type: GET_USER_SUCCESS, payload: data });
//         console.log("User Profile:", data);

//     } catch (error) {
//         dispatch({ type: GET_USER_FAILURE, payload: error.response?.data?.message || "Failed to fetch user" });
//         console.error("Error fetching user profile:", error);
//     }
// };

// // Add to Favorites
// export const addToFavorite = ({ restaurantId }) => async (dispatch) => {
//     dispatch({ type: ADD_TO_FAVORITE_REQUEST });
//     try {
//         const jwt = localStorage.getItem("jwt");
//         if (!jwt) throw new Error("No JWT token found");

//         const { data } = await api.put(`/auth/restaurants/${restaurantId}/add-favorite`, {}, {
//             headers: { Authorization: `Bearer ${jwt}` }
//         });

//         dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
//         console.log("Added to Favorite:", data);

//     } catch (error) {
//         dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error.response?.data?.message || "Failed to add to favorites" });
//         console.error("Add to Favorite Error:", error);
//     }
// };

// // Logout
// export const logout = () => (dispatch) => {
//     localStorage.clear();
//     dispatch({ type: LOGOUT });
//     console.log("Logout Success");
// };







// import { api, API_URL } from "../../config/api";
// import { 
//     ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, 
//     GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, 
//     LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, 
//     LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS 
// } from "./ActionType";
// import axios from "axios";

// // Register User
// export const registerUser = (reqData) => async (dispatch) => {
//     dispatch({ type: REGISTER_REQUEST });
//     try {
//         const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        
//         if (data.jwt) {
//             localStorage.setItem("jwt", data.jwt);
//         }

//         reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");

//         dispatch({ type: REGISTER_SUCCESS, payload: { jwt: data.jwt, user: data.user } });
//         console.log("Register Success", data);

//     } catch (error) {
//         dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || "Registration Failed" });
//         console.error("Register Error:", error);
//     }
// };

// // Login User
// export const loginUser = (reqData) => async (dispatch) => {
//     dispatch({ type: LOGIN_REQUEST });
//     try {
//         const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);

//         if (data.jwt) {
//             localStorage.setItem("jwt", data.jwt);
//         }

//         reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");

//         dispatch({ type: LOGIN_SUCCESS, payload: { jwt: data.jwt, user: data.user } });
//         console.log("Login Success", data);

//     } catch (error) {
//         dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.message || "Login Failed" });
//         console.error("Login Error:", error);
//     }
// };

// // Get User Profile
// export const getUser = () => async (dispatch) => {
//     dispatch({ type: GET_USER_REQUEST });
//     try {
//         const jwt = localStorage.getItem("jwt");
//         if (!jwt) throw new Error("No JWT token found");

//         const { data } = await api.get(`/users/profile`, {
//             headers: { Authorization: `Bearer ${jwt}` }
//         });
//         console.log("Fetched User Data:", data);

//         dispatch({ type: GET_USER_SUCCESS, payload: data });
//         console.log("User Profile:", data);

//     } catch (error) {
//         dispatch({ type: GET_USER_FAILURE, payload: error.response?.data?.message || "Failed to fetch user" });
//         console.error("Error fetching user profile:", error);
//     }
// };

// // Add to Favorites
// export const addToFavorite = ({ restaurantId }) => async (dispatch) => {
//     dispatch({ type: ADD_TO_FAVORITE_REQUEST });
//     try {
//         const jwt = localStorage.getItem("jwt");
//         if (!jwt) throw new Error("No JWT token found");

//         const { data } = await api.put(`/auth/restaurants/${restaurantId}/add-favorite`, {}, {
//             headers: { Authorization: `Bearer ${jwt}` }
//         });

//         dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
//         console.log("Added to Favorite:", data);

//     } catch (error) {
//         dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error.response?.data?.message || "Failed to add to favorites" });
//         console.error("Add to Favorite Error:", error);
//     }
// };

// // Logout
// export const logout = () => (dispatch) => {
//     localStorage.clear();
//     dispatch({ type: LOGOUT });
//     console.log("Logout Success");
// };








// Action.js - Combined action types and action creators

// Action Types
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const ADD_TO_FAVORITE_REQUEST = "ADD_TO_FAVORITE_REQUEST";
export const ADD_TO_FAVORITE_SUCCESS = "ADD_TO_FAVORITE_SUCCESS";
export const ADD_TO_FAVORITE_FAILURE = "ADD_TO_FAVORITE_FAILURE";

export const LOGOUT = "LOGOUT";
export const SET_USER = "SET_USER";

// Action Creators
import { api, API_URL } from "../../config/api";
import axios from "axios";

// Register User
export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");

        dispatch({ type: REGISTER_SUCCESS, payload: { jwt: data.jwt, user: data.user } });
        console.log("Register Success", data);

    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || "Registration Failed" });
        console.error("Register Error:", error);
    }
};

// Login User
export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");

        dispatch({ type: LOGIN_SUCCESS, payload: { jwt: data.jwt, user: data.user } });
        console.log("Login Success", data);

    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.message || "Login Failed" });
        console.error("Login Error:", error);
    }
};

// Get User Profile
export const getUser = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("No JWT token found");

        const { data } = await api.get(`/users/profile`, {
            headers: { Authorization: `Bearer ${jwt}` }
        });
        console.log("Fetched User Data:", data);

        dispatch({ type: GET_USER_SUCCESS, payload: data });
        console.log("User Profile:", data);

    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.response?.data?.message || "Failed to fetch user" });
        console.error("Error fetching user profile:", error);
    }
};

// Add to Favorites
export const addToFavorite = ({ restaurantId }) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });
    try {
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("No JWT token found");

        const { data } = await api.put(`/auth/restaurants/${restaurantId}/add-favorite`, {}, {
            headers: { Authorization: `Bearer ${jwt}` }
        });

        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
        console.log("Added to Favorite:", data);

    } catch (error) {
        dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error.response?.data?.message || "Failed to add to favorites" });
        console.error("Add to Favorite Error:", error);
    }
};

// Set User explicitly
export const setUser = (userData) => (dispatch) => {
    dispatch({ type: SET_USER, payload: userData });
};

// Logout
export const logout = () => (dispatch) => {
    localStorage.clear();
    dispatch({ type: LOGOUT });
    console.log("Logout Success");
};

