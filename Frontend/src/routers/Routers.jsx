// import React from "react";
// import { Routes } from "react-router-dom";
// import AdminRoute from "./AdminRoute";
// import CustomerRouter from "./CustomerRouter";

// export const Routers =()=>{
//     return (
//         <Routes>
//             <Routes path='/admin/restaurants/*' element={<AdminRoute/>}></Routes>
//             <Routes path='/*' element={<CustomerRouter/>}></Routes>


//         </Routes>
//     )
// }
// export default Routers


import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import CustomerRouter from "./CustomerRouter";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/admin/restaurants/*" element={<AdminRoute />} />
            <Route path="/*" element={<CustomerRouter />} />
        </Routes>
    );
};

export default Routers;
