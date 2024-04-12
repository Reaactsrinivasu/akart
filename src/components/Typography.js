import React from 'react'
import Imports from '../common/Imports';
const ReusableTypography = (props) => {
    return (
      <>
        <Imports.Typography
          component={props.component}
          variant={props.variant}
          color={props.color}
          sx={{
            ...props.sx,
          }}
        >
          {props.children}
        </Imports.Typography>
      </>
    );
};

export default ReusableTypography;