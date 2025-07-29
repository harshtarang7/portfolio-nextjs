'use client'
import { backgroundConstantColorDark, backgroundConstantColorLight } from "@/customTheme/customTheme";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import { Brightness5, DensityMedium, NightsStay, Sunny, ToggleOn } from "@mui/icons-material";
import { Box, Grid, IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";

interface HeaderProps {
  handleToggleSidebar:()=>void
}
export const Header = ({handleToggleSidebar}:HeaderProps) => {
    const theme = useTheme()
    const {toggleTheme, isDarkMode} = useThemeContext();

  return (
    <Grid
      container
      sx={{
        width: "100%",
        backgroundColor:isDarkMode ? backgroundConstantColorDark: backgroundConstantColorLight,
        justifyContent: "space-between",
        borderBottom:'1px solid #CCC',
        p:1,
        transition:'1s ease-out'
      }}
    >
      <Grid size={{ lg: 6 }}>
        <IconButton onClick={handleToggleSidebar}>
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
