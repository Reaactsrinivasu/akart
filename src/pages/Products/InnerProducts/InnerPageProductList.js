import React from "react";
import ReusableList from "../../../components/List";
const InnerPageProductList = () => {
  const list = [
    { item: "Mobiles" },
    { item: "Tablets" },
    { item: "Laptops" },
    { item: "Bluetooth" },
    { item: "Tv's" },
    { item: "Ac's" },
    { item: "Refrigirators" },
    { item: "Washing Machines" },
  ];
  return (
    <>
      <ReusableList list={list} title="Choose a Product" />
    </>
  );
};
export default InnerPageProductList;
