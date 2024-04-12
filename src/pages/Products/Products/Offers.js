import React from "react";
import ReusableList from "../../../components/List";
const Offers = () => {
  const list = [
    { item: "Buy more,Save more" },
    { item: "No Cost EMI" },
    { item: "Special Price" },
    { item: "Buy now,Pay later" },
  ];
  return (
    <>
      <ReusableList list={list} title="OFFERS" />
    </>
  );
};
export default Offers;
