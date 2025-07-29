'use client'
import { useThemeContext } from "@/customTheme/ThemeProvider";
import { Brightness5, DensityMedium, NightsStay, Sunny, ToggleOn } from "@mui/icons-material";
import { Box, Grid, IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";

export const Header = () => {
    const theme = useTheme()
    const {toggleTheme, isDarkMode} = useThemeContext()
  return (
    <Grid
      container
      sx={{
        width: "100%",
        backgroundColor:isDarkMode?'#1c1c1cff':'#eaeaeaff',
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
            onClick={toggleTheme}
            > {
              isDarkMode?(
                <NightsStay/>
              )
              :(
                <Sunny sx={{color:'orange'}}/>
              )
            }
            </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};
