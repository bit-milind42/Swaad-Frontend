
import { TextField, Typography, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../state/authentication/Action";

const initialValues = {
    email: "",
    password: ""  
};

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { auth } = useSelector((store) => store); // ✅ Get user authentication state
    const auth = useSelector((store) => store.auth);

    // ✅ Redirect if user is already logged in
    useEffect(() => {
        if (auth.user && auth.jwt) {
            navigate("/"); // Redirect to home if already logged in
        }
    }, [auth, navigate]);

    return (
        <div>
            <Typography variant="h5" className="text-center">
                Login
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log("Submitting values:", values); // ✅ Debugging line
                    dispatch(loginUser({ userData: values, navigate }));
                }}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}> {/* ✅ Pass Formik's handleSubmit */}
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
                        <Button
                            sx={{ mt: 2, padding: "1rem" }}
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don't have an account?
                <Button size="small" onClick={() => navigate("/account/register")}>
                    Register
                </Button>
            </Typography>
        </div>
    );
};
