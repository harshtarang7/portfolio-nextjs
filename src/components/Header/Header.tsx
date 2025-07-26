'use client'
import { Brightness5, DensityMedium, ToggleOn } from "@mui/icons-material";
import { Box, Grid, IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";

export const Header = () => {
    const theme = useTheme()
  return (
    <Grid
      container
      sx={{
        width: "100%",
        backgroundColor: "grey",
        justifyContent: "space-between",
        border:'1px solid black',
        p:1
      }}
    >
      <Grid size={{ lg: 6 }}>
        <IconButton>
            <DensityMedium/>
        </IconButton>
      </Grid>
      <Grid size={{ lg: 6 }}>
        <Tooltip title="Theme">
            <IconButton
            // onClick={toggleTheme}
            sx={{bgcolor:theme.palette.background.default}}
            >
               <Brightness5/>
            </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};
