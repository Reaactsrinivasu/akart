import React from "react";
import ReusableList from "../../../components/List";
const InnerPageBrandsLists = () => {
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
      <ReusableList list={list} title="Choose a Brand" />
    </>
  );
};
export default InnerPageBrandsLists;
