import React from "react";
import Imports from "../common/Imports";
const ReusableBgBox = (props) => {
  return (
    <>
      <Imports.Box
        sx={{
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Box>
    </>
  );
};
export default ReusableBgBox;
