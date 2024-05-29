import React from "react";
import { Typography, Box, Divider, Avatar, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReusableOpenList from "../../components/OpenLIst";
const OrderMyOrders = () => {
    const list = [
      { item: "Orders & Returns" },
      { item: "OrderManagement" },
    ];
  return (
    <>
      <ReusableOpenList
        icon="assets/imgs/myorders.png"
        list={list}
        title="MY ORDERS"
        status={true}
      />
    </>
  );
};
export default OrderMyOrders;
