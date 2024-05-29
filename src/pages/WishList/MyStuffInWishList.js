import React from 'react';
import ReusableOpenList from "../../components/OpenLIst";
const MyStuffInWishList = () => {
     const list = [
       { item: "My Coupons" },
       { item: "My Reviews & Ratings" },
       { item: "All Notifications" },
       { item: "My Wishlist" },
     ];
    return (
      <>
        <ReusableOpenList
          icon="assets/imgs/mystuff.png"
          list={list}
          title="MY STUFF"
          status={true}
        />
      </>
    );
};
export default MyStuffInWishList;