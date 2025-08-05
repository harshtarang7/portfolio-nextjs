"use client";
import {
  backgroundConstantColorDark,
  backgroundConstantColorLight,
} from "@/customTheme/customTheme";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import {
  Brightness5,
  DensityMedium,
  NightsStay,
  Sunny,
  ToggleOn,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  handleToggleSidebar: () => void;
}
export const Header = () => {
  const theme = useTheme();
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <Grid
      container
      sx={{
        width: "50%",
        // color:isDarkMode ? backgroundConstantColorDark: backgroundConstantColorLight,
        justifyContent: "center",
        alignItems: "center",
        // borderBottom:'1px solid #CCC',
        // border: 1,
        py: 2,
        margin: "auto",
        // transition:'1s ease-out'
      }}
    >
      <Grid size={{ lg: 12 }}>
        <ul
          style={{
            display: "flex",
            textDecoration: "none",
            listStyle: "none",
            gap: "3rem",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <li>
            <Link href={"/"}>
              <Typography>Home</Typography>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Typography>Projects</Typography>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Typography>About Me</Typography>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Typography>Resume</Typography>
            </Link>
          </li>
          <li>
            <Tooltip title="Theme">
              <IconButton onClick={toggleTheme}>
                {isDarkMode ? (
                  <NightsStay />
                ) : (
                  <Sunny sx={{ color: "orange" }} />
                )}
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Link href={"#"}>
              <Button variant="contained">Contact Me?</Button>
            </Link>
          </li>
        </ul>
      </Grid>
      
    </Grid>
  );
};
