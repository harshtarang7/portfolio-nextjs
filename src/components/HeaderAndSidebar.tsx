"use client";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { useState } from "react";
import { Footer } from "./Footer/page";

export const HeaderAndSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();


  return (
    <Grid container >
      <Grid
        size={{
          lg: 12,
        }}
      >
        <Header />

        <Box component="main" sx={{ p: 2 }} >
          {children}
        </Box>
         <Footer />
      </Grid>
    </Grid>
  );
};
