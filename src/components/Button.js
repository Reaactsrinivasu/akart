import React from "react";
import Imports from "../common/Imports";
const ReusableButton = (props) => {
  return (
    <>
      <Imports.Button
        variant={props.variant}
        fullWidth={props.fullWidth}
        onClick={props.onClick}
        type={props.type}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        sx={{
          color: "#111",
          bgcolor: "#FFD814",
          borderColor: "#FCD200",
          borderRadius: "md",
          textDecoration: "none",
          textTransform: "none",
          whiteSpace: "nowrap",
          "&:hover": {
            bgcolor: "#FCD200",
          },
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Button>
    </>
  );
};
export default ReusableButton;
