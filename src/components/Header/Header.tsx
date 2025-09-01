"use client";

import { useThemeContext } from "@/customTheme/ThemeProvider";
import { NightsStay, Sunny, Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const Header = () => {
  const theme = useTheme();
  const { toggleTheme, isDarkMode } = useThemeContext();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  interface NavItem {
    href: string;
    label: string;
  }
  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about-me", label: "About Me" },
    { href: "/contact", label: "Contact" },
    // { href: "/resume", label: "Resume" },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const NavLink = ({ link }: { link: NavItem }) => {
    const active = pathname === link.href;
    return (
      <Link href={link.href}>
        <Typography
          sx={{
            position: "relative",
            padding: "0.5rem 1rem",
            color: active
              ? "white"
              : isDarkMode
              ? theme.palette.primary.dark
              : "black",
            borderRadius: active ? 4 : 0,
            transition: "all 0.3s ease",
            backgroundColor: active ? theme.palette.primary.dark : "",
            "&:hover": {
              backgroundColor: !active
                ? isDarkMode
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)"
                : undefined,
              borderRadius: 4,
            },
            fontSize: 15,
          }}
        >
          {link.label}
        </Typography>
      </Link>
    );
  };

  return (
    <Grid
      container
      sx={{
        width: { xs: "95%", sm: "85%", md: "75%", lg: "70%" },
        justifyContent: "space-between",
        alignItems: "center",
        py: { xs: 1.5, md: 2 },
        margin: "auto",
      }}
    >
      {!isMobile && (
        <Grid
          size={12}
          sx={{
            display: "flex",
            textDecoration: "none",
            listStyle: "none",
            gap: { sm: "1.5rem", md: "2rem", lg: "3rem" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {navItems.map((link, index) => (
            <li key={index}>
              <NavLink link={link} />
            </li>
          ))}

          <li>
            <Tooltip title="Toggle Theme">
              <IconButton onClick={toggleTheme}>
                {isDarkMode ? (
                  <NightsStay />
                ) : (
                  <Sunny sx={{ color: "orange" }} />
                )}
              </IconButton>
            </Tooltip>
          </li>
        </Grid>
      )}
      {isMobile && (
        <>
          {/* Mobile Header with Menu Button and Theme Toggle */}
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mx:1
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: isDarkMode
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
                fontWeight: "bold",
              }}
            >
              Portfolio
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tooltip title="Toggle Theme">
                <IconButton onClick={toggleTheme} size="small">
                  {isDarkMode ? (
                    <NightsStay />
                  ) : (
                    <Sunny sx={{ color: "orange" }} />
                  )}
                </IconButton>
              </Tooltip>

              <Tooltip title="Menu">
                <IconButton onClick={handleClick}>
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>

          {/* Mobile Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: theme.palette.background.default,
                minWidth: 160,
              },
            }}
          >
            {navItems.map((link, index) => {
              const active = pathname === link.href;
              return (
                <MenuItem
                  key={index}
                  onClick={handleClose}
                  sx={{
                    backgroundColor: active
                      ? theme.palette.primary.dark
                      : "transparent",
                    color: active ? "white" : "inherit",
                    "&:hover": {
                      backgroundColor: active
                        ? theme.palette.primary.dark
                        : isDarkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    {link.label}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </>
      )}
      {/* <Grid size={{ lg: 12}} sx={{
         display: "flex",
            textDecoration: "none",
            listStyle: "none",
            gap: "3rem",
            justifyContent: "center",
            alignItems: "center",
      }}>
        
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
                        ? "white"
                        : isDarkMode
                        ? theme.palette.primary.dark
                        : "black",

                      borderRadius: active ? 4 : 0,
                      transition: "border-color 0.3s ease",
                      backgroundColor: active ? theme.palette.primary.dark : "",
                      "&:hover": {
                        borderColor: theme.palette.primary.light,
                      },
                      fontSize:15
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
      </Grid> */}
    </Grid>
  );
};
