import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { CartItem } from "./CartItem";
import { AddressCard } from "./AddressCard";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: ""
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.number().required("Pincode is required"),
  city: Yup.string().required("City is required"),
});

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useSelector(store => store);
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();

  const itemTotal = cart.cartItems?.reduce((acc, item) => acc + (item.totalPrice || 0), 0) || 0;

  const handleClose = () => setOpen(false);
  const handleOpenAdressModal = () => setOpen(true);

  const handleSubmit = async (values) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems[0]?.food?.restaurant?.id,
        deliveryAddress: {
          fullName: auth.user?.fullName,
          streetAddress: values.streetAddress,
          city: values.city,
          state: values.state,
          postalCode: values.pincode,
          country: "India"
        }
      }
    };

    try {
      const res = await axios.post("http://localhost:5454/api/order", data.order, {
        headers: {
          Authorization: `Bearer ${data.jwt}`,
        },
      });

      const razorpayOrderId = res.data.payment_url;

      const options = {
        key: "Enter your razorpay key id", 
        amount: (itemTotal + 33 + 21) * 100,
        currency: "INR",
        name: "Swaad Restaurant",
        description: "Order Payment",
        order_id: razorpayOrderId,
        handler: function (response) {
          console.log("✅ Payment Success", response);
          window.location.href = `/payment/success/${razorpayOrderId}`;

        },
        prefill: {
          name: auth.user?.fullName,
          email: auth.user?.email,
          contact: "9999999999",
        },
        notes: {
          address: values.streetAddress,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (error) {
      console.error("❌ Payment Error", error);
    }
  };
  


  return (
    <>
      <main className='lg:flex justify-between'>
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart?.cartItems?.length > 0 &&
            cart.cartItems.map((item) => <CartItem key={item.id} item={item} />)}

          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹{itemTotal}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Charges</p>
                <p>₹21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>₹15</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Total Pay</p>
              <p>₹{itemTotal + 33 + 21}</p>
            </div>
          </div>
        </section>

        <Divider orientation="vertical" flexItem />

        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div className="mt-12">
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1].map((item, index) => (
                <AddressCard key={index} handleSelectAddress={() => {}} item={item} showButton={true} />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">Add New Address</h1>
                  <Button variant="outlined" fullWidth onClick={handleOpenAdressModal}>Add</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field as={TextField} name="streetAddress" label="Street Address" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="state" label="State" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="city" label="City" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="pincode" label="Pincode" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" type="submit" color="primary">Add Address</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;







