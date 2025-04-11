
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Formik, Form } from "formik"; // Corrected import
import React from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../state/authentication/Action";
import { useDispatch } from "react-redux";

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER",
};

export const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();


    const handleSubmit = (values) => {
        console.log("Form Submitted:", values);
        dispatch(registerUser({userData:values, navigate}))
        
        // Add form submission logic here, e.g., API call
    };

    return (
        <div>
            <Typography variant="h5" align="center">
                Register
            </Typography>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field
                            as={TextField}
                            name="fullName"
                            label="Full Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            
                        />

                        <FormControl fullWidth margin="normal">
                                <InputLabel id="role-simple-select-label">Role</InputLabel>
                                <Field
                                as={Select}
                                labelId="role-simple-select-label"
                                id="role-simple-select"
                                name="role"
                                // value={age}
                                label="Role"
                                // onChange={handleChange}
                                >
                                
                                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                                
                                </Field>
                            </FormControl>

                        <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type="submit" variant="contained" color="primary">
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Already have an account?
                <Button size="small" onClick={() => navigate("/account/login")}>
                    Login
                </Button>
            </Typography>
        </div>
    );
};
