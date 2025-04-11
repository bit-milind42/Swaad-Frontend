
import React, { useEffect, useState } from "react";
import {
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import OrderTable from "./OrderTable";
import { getUsersOrders } from "../../components/state/order/Action";


const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "All", value: "ALL" },
];

const Orders = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store);
  const jwt = state?.auth?.jwt || localStorage.getItem("jwt");

  const [filterValue, setFilterValue] = useState("ALL");

  const handleFilter = (e, value) => {
    setFilterValue(value);
  };

  useEffect(() => {
    console.log("✅ Redux full state:", state);
    console.log("🔐 JWT being used:", jwt);

    if (jwt) {
      dispatch(getUsersOrders(jwt));
    } else {
      console.warn("❌ JWT not found. Check login or store setup.");
    }
  }, [jwt, dispatch]);

  return (
    <div className="px-2">
      <Card className="p-5">
        <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
          Order Status
        </Typography>
        <FormControl>
          <RadioGroup
            onChange={handleFilter}
            row
            name="category"
            value={filterValue}
          >
            {orderStatus.map((item) => (
              <FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <OrderTable filterValue={filterValue} />
      </Card>
    </div>
  );
};

export default Orders;
