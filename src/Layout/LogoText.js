import React from 'react'
import { Typography } from '@mui/material';
const LogoText = () => {
    return (
      <>
        <Typography
          variant="h2"
          noWrap
          component="div"
          sx={{
            marginTop: "5px",
            fontWeight: "bold",
            color: "#ff7e00",
            fontStyle: "Alfa Slab One",
            minHeight: "45px",
            lineHeight: "39px",
          }}
        >
          akart
        </Typography>
      </>
    );
};

export default LogoText;