import React from "react";
import ReusableList from "../../../components/List";
const Discount = () => {
  const list = [
    {item:'70% or more'},
    {item:'60% or more'},
    {item:'50% or more'},
    {item:'40% or more'},
    {item:'30% or more'},
  ];
  return (
    <>
      <ReusableList list={list} title="DISCOUNT" />
    </>
  );
};

export default Discount;
