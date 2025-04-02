import React from 'react' 
import { Route, Routes } from 'react-router-dom' 
import { Admin } from '../adminComponent/admin/Admin'
import CreateRestaurantForm from '../adminComponent/CreateRestaurantForm/createRestaurantForm'

export const AdminRoute = () => { 
return ( 
    <div> 
        <Routes> 
            <Route path='/*' element={true ?<CreateRestaurantForm/>:<Admin/>}> 
            </Route> 
        </Routes> 
    </div>
    )
}

export default AdminRoute