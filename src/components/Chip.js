import React from "react";
import Imports from "../common/Imports";
const ReusableChip = (props) => {
  return (
    <>
      <Imports.Chip
              label={props.label}
              size={props.size}
        sx={{
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Chip>
    </>
  );
};
export default ReusableChip;
