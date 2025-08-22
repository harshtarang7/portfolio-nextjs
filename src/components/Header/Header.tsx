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
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
  const theme = useTheme();
  const { toggleTheme, isDarkMode } = useThemeContext();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about-me", label: "About Me" },
    { href: "/contact", label: "Contact" },
    // { href: "/resume", label: "Resume" },
  ];
  return (
    <Grid
      container
      sx={{
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        margin: "auto",
      }}
    >
      <Grid size={{ lg: 12 }}>
        <ul
          style={{
            display: "flex",
            textDecoration: "none",
            listStyle: "none",
            gap: "3rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {navItems.map((link, index) => {
            const active = pathname === link.href;
            return (
              <li key={index}>
                <Link href={link.href}>
                  <Typography
                    sx={{
                      position: "relative",
                      padding: "0.5rem 1rem",
                      color: active
                        ? 'white'
                        :isDarkMode ? theme.palette.primary.dark:'black',

                      borderRadius:active?4:0,
                      transition: "border-color 0.3s ease",
                      backgroundColor:active? theme.palette.primary.dark:'',
                      "&:hover": {
                        borderColor: theme.palette.primary.light,
                      },
                      
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              </li>
            );
          })}

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
        </ul>
      </Grid>
    </Grid>
  );
};
