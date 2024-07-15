import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@mui/material";

const CustomStepper = (props) => {
    return (
      <>
          <Box sx={{ maxWidth: 400, margin: "0 auto", padding: "20px 0px" }}>
            {props?.steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: "-1px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <Box
                    sx={{
                      // bgcolor: "green",
                      bgcolor: step.description === "" ? "#9e9e9e" : "green",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // color: "green",
                      color: step.description === "" ? "#9e9e9e" : "green",
                      mb: "-1px",
                    }}
                  >
                    {index + 1}
                  </Box>
                  {index < props?.steps?.length - 1 && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        marginLeft: "7px",
                        mt: 0,
                        // bgcolor: "green",
                        bgcolor: step.description === "" ? "#9e9e9e" : "green",
                        borderWidth: "0px",
                        width: "6px",
                        height: "100px", // Changed from '100%' to 'auto'
                      }}
                    />
                  )}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "green", fontWeight: 600 }}
                  >
                    {step.label}
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
      </>
    );
};

export default CustomStepper;