import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  createWishListDataInitiate,
  deleteWishListDataInitiate,
  loadWishListDataInitiate,
} from "../redux/actions/wishLIst/wishListDataActions";
import loadProductDataInitiate from "../redux/actions/Product/getProductWithSubCategoryActions";
const WishlistIcon = (props) => {
    // const [isWishlisted, setIsWishlisted] = useState(false);
    console.log("props inwishlist", props.isWished);
  const dispatch = useDispatch();
    // const wishlist = useSelector((state) => state.wishlist.wishlist);
     const productdata = useSelector(
       (state) => state.productdata?.data?.data || []
     );
     console.log("productdata", productdata);
     useEffect(() => {
       dispatch(loadProductDataInitiate(props?.cat_name));
     }, [dispatch]);
   
    // const isWishlisted =
    //   Array.isArray(wishlist) &&
    //   wishlist.some((item) => item.product_id === props.id);
    // console.log('isWishlisted', isWishlisted);
      
//   const handleWishlistToggle = () => {
//     if (props.isWished) {
//       dispatch(deleteWishListDataInitiate(props?.id));
//     } else {
//       dispatch(createWishListDataInitiate(props?.id));
//     }
//   };
  return (
    <IconButton
      onClick={() => props.handleWishlistToggle(props?.isWished)}
      //   onClick={() => handleWishlistToggle()}
      //   sx={{ ...props.sx }}
    >
      {props?.isWished ? (
        <FavoriteIcon
          sx={{
            color: "red",
            // ...props.sx,
          }}
        />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
};
export default WishlistIcon;
