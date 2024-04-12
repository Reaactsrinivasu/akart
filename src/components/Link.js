import React from "react";
import Imports from "../common/Imports";
const ReusableLink = (props) => {
  return (
    <>
      <Imports.Link
        variant={props.variant}
        underline={props.underline}
        onClick = {props.onClick}
        sx={{
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Link>
    </>
  );
};
export default ReusableLink;
