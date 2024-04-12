import React from "react";
import Imports from "../common/Imports";
const ReusableBox = (props) => {
  let component = props.component;
  let gap = props.gap;

  return (
    <>
      <Imports.Box
        component={component}
        gap={gap}
        sx={{
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Box>
    </>
  );
};
export default ReusableBox;
