import React from "react";
import Imports from "../common/Imports";
const ReusableGrid = (props) => {
  return (
    <>
      <Imports.Grid
              display={props.display}
              flexDirection={props.flexDirection}
              flexGrow={props.flexGrow}
              justifyContent={props.justifyContent}
              alignContent={props.alignContent}
              alignItems={props.alignItems}
              
        sx={{
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Grid>
    </>
  );
};
export default ReusableGrid;
