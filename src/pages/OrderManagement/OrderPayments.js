import React from "react";
import ReusableOpenList from "../../components/OpenLIst";
const OrderPayments = () => {
  const list = [
    { item: "Gift Cards" },
    { item: "Saved UPI" },
    { item: "Saved Cards" },
  ];
  return (
    <>
      <ReusableOpenList
        icon="assets/imgs/payment.png"
        list={list}
        title="PAYMENTS"
        status={true}
      />
    </>
  );
};

export default OrderPayments;
