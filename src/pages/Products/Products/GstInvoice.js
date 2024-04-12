import React from "react";
import ReusableList from "../../../components/List";
const GstInvoice = () => {
      const list = [
        { item: "GST Invoice Available" },
      ];
  return (
    <>
      <ReusableList list={list} title="GST INVOICE AVAILABILITY" />
    </>
  );
};

export default GstInvoice;
