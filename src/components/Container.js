import React from "react";
import Imports from "../common/Imports";
const ReusableContainer = (props) => {
  let maxWidth = props.maxWidth;
  let component = props.component;
  return (
    <>
      <Imports.Container
        maxWidth={maxWidth}
        component={component}
        sx={{
          margin: "auto",
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Container>
    </>
  );
};
export default ReusableContainer;
