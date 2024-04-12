import React from "react";
import Imports from "../common/Imports";
const ReusablePaper = (props) => {
  let variant = props.variant;
  let square = props.square;
  let elevation = props.elevation;
  return (
    <>
      <Imports.Paper
        variant={variant}
        square={square}
        elevation={elevation}
        sx={{
          // padding: "10px",
          // mb: 2,
          // mt: 2,
          // boxShadow: "0px 10px 80px rgba(0, 0, 0, 0.1)",
          // bgcolor: "#fff",
          // borderRadius: "10px",
          // maxWidth: 400,
          // mx: "auto", // margin left & right
          // my: 15, // margin top & botom
          // py: 3, // padding top & bottom
          // px: 2, // padding left & right
          // display: "flex",
          // flexDirection: "column",
          // gap: 2,
          // borderRadius: "sm",
          // // boxShadow: "md",
          // bgcolor: "#fff",
          // color: "orange",
          
          marginTop: "20px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          justifyContent:'left',
          bgcolor: "#fff",
          // border: "2px solid #6B6767",
          borderRadius: '0.6rem',
          // boxShadow: "10px",
          boxShadow: '0px 10px 80px rgba(0, 0, 0, 0.1)',
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Paper>
    </>
  );
};
export default ReusablePaper;
