import React from "react";
import ReusableList from "../../../components/List";
const Brands = () => {
  const list = [
    { item: "MI" },
    { item: "ReadMe" },
    { item: "Apple" },
    { item: "Samsung" },
    { item: "Vivo" },
    { item: "Oppo" },
    { item: "OnePlus" },
    { item: "Spigen" },
  ];

  return (
    <>
      <ReusableList list={list} title="BRANDS"/>
    </>
  );
};

export default Brands;
