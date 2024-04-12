import React from "react";
import ReusableList from "../../../components/List";
const ProductAvailability = () => {
    const list = [
      { item: "Exclude out of stock" },
      { item: "Include out of stock" },
      { item: "New arrivals" },
      { item: "Foreign Brands" },
      { item: "Local Brands" },
    ];
 
  return (
    <>
      <ReusableList list={list} title="AVAILABILITY" />
    </>
  );
};

export default ProductAvailability;
