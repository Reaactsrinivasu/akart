import React from "react";
import ReusableOpenList from "../../components/OpenLIst";
const OrderLogout = () => {
  return (
    <>
      <ReusableOpenList
        icon="assets/imgs/logout.png"
        title="Logout"
        status={false}
      />
    </>
  );
};

export default OrderLogout;
