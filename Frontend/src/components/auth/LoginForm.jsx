// import { Password } from "@mui/icons-material";
// import { TextField, Typography } from "@mui/material";
// import { Field, Formik } from "formik";
// import React from "react";
// import { Form } from "react-router-dom";
// const initialValues={
//     email:"",
//     password:""
// }
// export const LoginForm = () => {
//     const handleSubmit=()=>{

//     }
//     return(
//         <div>
//             <Typography variant='h5' className='text-center'>
//                 Login
//             </Typography>
//             <Formik onSubmit={handleSubmit} initialValues={initialValues}>

//                 <Form>
//                     <Field as={TextField}
//                         name="email"
//                         label="email"
//                         fullWidth
//                         variant="outlined"
//                     /> 
//                     <Field as={TextField}
//                         name="password"
//                         label="password"
//                         fullWidth
//                         variant="outlined"
//                     />     
                    
//                 </Form>

//             </Formik>
//         </div>

//     )
// }




import { TextField, Typography, Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../state/authentication/Action";

const initialValues = {
    email: "",
    password: ""  
};

export const LoginForm = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleSubmit = (values) => {
        dispatch(loginUser({userData:values, navigate}))
    };

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Login
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                {/* {({ handleSubmit }) => ( */}
                    <Form onSubmit={handleSubmit}>
                        <Field as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Field as={TextField}
                            name="password"
                            label="Password"
                            type="password"  // Added type="password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Button sx={{mt:2, padding:"1rem"}} fullWidth type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Form>
                {/* )} */}
            </Formik>
            <Typography variant="body2" align="center" sx={{mt:3}}>
                Don't have an account?
                <Button size="small" onClick={()=> navigate('/account/register')}>
                    register

                </Button>
            </Typography>

        </div>
    );
};
