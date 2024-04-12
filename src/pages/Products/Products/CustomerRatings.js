import React from "react";
import ReusableList from "../../../components/List";

const CustomerRatings = () => {
    const list = [
      { item: "4★ & above" },
      { item: "3★ & above" },
      { item: "2★ & above" },
      { item: "1★ & above" },
    ];
  return (
    <>
      <ReusableList list={list} title="CUSTOMER RATINGS" />
    </>
  );
};

export default CustomerRatings;
