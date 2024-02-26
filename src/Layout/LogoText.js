import React from 'react'
import { Typography } from '@mui/material';
const LogoText = () => {
    return (
      <>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{
            marginTop: "5px",
            fontWeight: "bold",
            color: "#ff7e00",
            fontStyle: "Alfa Slab One",
          }}
        >
          akart
        </Typography>
      </>
    );
};

export default LogoText;